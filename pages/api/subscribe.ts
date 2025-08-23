import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * Subscribe endpoint
 * Choose a provider with PROVIDER=beehiiv|mailchimp|convertkit
 * Set ENV vars per provider (see .env.example)
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { email } = JSON.parse(req.body || '{}')
  if (!email || typeof email !== 'string') return res.status(400).json({ error: 'Email required' })

  const provider = process.env.PROVIDER

  try {
    if (provider === 'beehiiv') {
      // https://www.beehiiv.com/docs/api#tag/subscriptions/POST/v2/publications/{publication_id}/subscriptions
      const r = await fetch(`https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUBLICATION_ID}/subscriptions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': process.env.BEEHIIV_API_KEY || ''
        },
        body: JSON.stringify({
          email,
          reactivate_existing: true,
          send_welcome_email: true,
          utm_source: 'landing',
          referring_site: 'sleeptipsdaily.com'
        })
      })
      const data = await r.json()
      if (!r.ok) throw new Error(data?.message || 'Beehiiv error')
      return res.status(200).json({ ok: true, provider: 'beehiiv' })
    }

    if (provider === 'mailchimp') {
      // https://mailchimp.com/developer/marketing/api/list-members/add-member-to-list/
      const datacenter = (process.env.MAILCHIMP_API_KEY || '').split('-')[1] || 'us1'
      const url = `https://${datacenter}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_AUDIENCE_ID}/members`
      const r = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `apikey ${process.env.MAILCHIMP_API_KEY}`
        },
        body: JSON.stringify({
          email_address: email,
          status: 'pending', // double opt-in
          tags: ['landing', 'sleeptipsdaily']
        })
      })
      const data = await r.json()
      if (!r.ok && data?.title !== 'Member Exists') throw new Error(data?.detail || 'Mailchimp error')
      return res.status(200).json({ ok: true, provider: 'mailchimp' })
    }

    if (provider === 'convertkit') {
      // https://developers.convertkit.com/#subscribe-to-a-form
      const r = await fetch(`https://api.convertkit.com/v3/forms/${process.env.CONVERTKIT_FORM_ID}/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          api_key: process.env.CONVERTKIT_API_KEY,
          email
        })
      })
      const data = await r.json()
      if (!r.ok) throw new Error(data?.message || 'ConvertKit error')
      return res.status(200).json({ ok: true, provider: 'convertkit' })
    }

    // Fallback: no provider configured, simulate success
    return res.status(200).json({ ok: true, provider: 'none' })
  } catch (e: any) {
    console.error('Subscribe error', e?.message)
    return res.status(500).json({ error: e?.message || 'Subscription failed' })
  }
}
