import { useState } from 'react'
import { Mail, CheckCircle2, Sparkles, Shield } from 'lucide-react'

export default function Landing() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function subscribe(e: React.FormEvent) {
    e.preventDefault()
    if (loading) return

    setError('')
    const ok = /.+@.+\..+/.test(email.trim())
    if (!ok) {
      setError('Please enter a valid email.')
      return
    }

    setLoading(true)
    try {
      const resp = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })

      // Redirect on success OR "already subscribed"
      if (resp.ok || resp.status === 409 || resp.status === 422) {
        window.location.href = '/thanks'
        return
      }

      // Bubble up any error message from API
      let msg = `Signup failed (${resp.status}). Please try again.`
      try {
        const data = await resp.json()
        if (data?.error) msg = typeof data.error === 'string' ? data.error : JSON.stringify(data.error)
        if (data?.status && data?.body) msg = `(${data.status}) ${data.body}`
      } catch {}
      setError(msg)
    } catch (err: any) {
      setError(err?.message || 'Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const bullets = [
    'Free daily sleep tips — one 30-second tip every evening.',
    'Sleep hygiene made simple: caffeine cutoffs, light exposure, temperature, timing.',
    'Science-backed insights on circadian rhythm, melatonin, deep sleep and REM.',
    'Practical bedtime routines to fall asleep faster and wake up rested.'
  ]

  const samples = [
    'Get morning daylight within 60 minutes of waking — anchors your circadian rhythm.',
    'Keep your bedroom 60–67°F — cooler rooms increase deep sleep.',
    'Dim overhead lights 60 minutes before bed — switch to lamps to boost melatonin.',
    'No caffeine after 2 PM — improves sleep quality and reduces insomnia symptoms.'
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="badge">Free email newsletter</span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-serif font-bold tracking-tight text-slate-900">
              Daily sleep tips to help you <span className="text-brand-700">sleep better</span> — in 30 seconds a day.
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Join Sleep Tips Daily and get one science-backed, actionable tip each evening. Improve sleep hygiene, build a better bedtime routine, and fall asleep faster.
            </p>

            <form onSubmit={subscribe} className="mt-6 p-2 bg-white border border-slate-200 rounded-2xl flex flex-col sm:flex-row gap-2">
              <label htmlFor="email" className="sr-only">Email</label>
              <div className="flex items-center gap-2 flex-1 px-3 py-2 rounded-xl border border-slate-200 bg-white">
                <Mail className="w-5 h-5 text-slate-500" aria-hidden />
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email for daily sleep tips"
                  className="bg-transparent outline-none text-slate-900 placeholder:text-slate-500 w-full"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="px-5 py-2.5 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-700 transition disabled:opacity-60"
              >
                {loading ? "Submitting…" : "Get nightly sleep tips"}
              </button>
            </form>
            {error && <p className="mt-2 text-rose-600 text-sm" role="alert">{error}</p>}

            <ul className="mt-6 grid gap-3">
              {bullets.map((b,i)=> (
                <li key={i} className="flex items-start gap-2 text-slate-700"><CheckCircle2 className="w-5 h-5 text-brand-700 mt-0.5"/>{b}</li>
              ))}
            </ul>

            <div className="mt-4 text-xs text-slate-500 flex items-center gap-2"><Shield className="w-4 h-4"/> We’ll never share your email. One-click unsubscribe.</div>
          </div>

          <div className="card p-6">
            <p className="text-brand-700 font-medium">Tonight’s sleep tip</p>
            <ul className="mt-3 space-y-3 text-slate-700">
              {samples.map((s,i)=> (<li key={i} className="flex gap-3"><Sparkles className="w-5 h-5 text-brand-600"/>{s}</li>))}
            </ul>
            <div className="mt-6 rounded-xl bg-brand-50 border border-brand-100 p-4 text-sm text-brand-900">
              Bonus: Free <strong>7-Day Sleep Jumpstart</strong> PDF when you subscribe — quick wins for falling asleep faster.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-6 text-slate-700">
          <div>
            <h3 className="font-semibold text-slate-900">What are sleep tips?</h3>
            <p>
              Sleep tips are short, science-backed recommendations that improve your sleep quality. 
              They include routines, habits, and adjustments like light exposure, caffeine timing, 
              and bedroom environment.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">How can Sleep Tips Daily help me?</h3>
            <p>
              We send you one quick, easy-to-read tip each evening. Over time, these daily tips help 
              you build better sleep hygiene, fall asleep faster, and wake up more refreshed.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Is the newsletter free?</h3>
            <p>
              Yes. Sleep Tips Daily is 100% free to join. We may include helpful resources and 
              occasional partner recommendations, but the core tips are always free.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">When will I receive the tips?</h3>
            <p>
              We deliver each tip in the evening, so you can put it into practice before going to bed. 
              Consistency is key to improving sleep habits.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">What is good sleep hygiene?</h3>
            <p>
              Sleep hygiene refers to the daily habits and environment that support healthy sleep. 
              Examples include keeping a consistent bedtime, limiting screen use at night, 
              avoiding caffeine late in the day, and making your bedroom cool and dark. 
              Practicing good sleep hygiene makes falling asleep easier and improves sleep quality.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
