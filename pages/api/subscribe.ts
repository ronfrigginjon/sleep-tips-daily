// pages/api/subscribe.ts
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' })

  try {
    // ✅ Handle both dev and prod: string vs object body
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
    const email = body?.email?.toString().trim()

    if (!email) return res.status(400).json({ ok: false, error: 'Missing email' })
    if (!process.env.BEEHIIV_API_KEY || !process.env.BEEHIIV_PUBLICATION_ID) {
      return res.status(500).json({ ok: false, error: 'Missing Beehiiv env vars' })
    }

    const url = `https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUBLICATION_ID}/subscriptions`
    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.BEEHIIV_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })

    const text = await resp.text() // capture body for debugging
    if (!resp.ok) {
      return res.status(400).json({ ok: false, status: resp.status, body: text })
    }

    return res.status(200).json({ ok: true, provider: 'beehiiv' })
  } catch (err: any) {
    return res.status(500).json({ ok: false, error: err.message })
  }
}
