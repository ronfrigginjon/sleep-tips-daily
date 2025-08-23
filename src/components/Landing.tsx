import { useState } from 'react'
import { Mail, CheckCircle2, Sparkles, Shield, Sun, Moon } from 'lucide-react'

export default function Landing() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  async function subscribe(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    const ok = /.+@.+\..+/.test(email)
    if (!ok) return setError('Please enter a valid email.')
    await fetch('/api/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) }); setSubmitted(true)
  }

  const bullets = [
    'Free daily sleep tips — one 30‑second tip every evening.',
    'Sleep hygiene made simple: caffeine cutoffs, light exposure, temperature, timing.',
    'Science‑backed insights on circadian rhythm, melatonin, deep sleep and REM.',
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
                <input id="email" type="email" autoComplete="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter your email for daily sleep tips" className="bg-transparent outline-none text-slate-900 placeholder:text-slate-500 w-full" />
              </div>
              <button type="submit" className="px-5 py-2.5 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-700 transition">
                {submitted ? "You're in!" : "Get nightly sleep tips"}
              </button>
            </form>
            {error && <p className="mt-2 text-rose-600 text-sm" role="alert">{error}</p>}
            {submitted && <p className="mt-2 text-emerald-700 text-sm" role="status">Check your inbox for a confirmation link.</p>}

            <ul className="mt-6 grid gap-3">
              {bullets.map((b,i)=> (
                <li key={i} className="flex items-start gap-2 text-slate-700"><CheckCircle2 className="w-5 h-5 text-brand-700 mt-0.5"/>{b}</li>
              ))}
            </ul>

            <div className="mt-4 text-xs text-slate-500 flex items-center gap-2"><Shield className="w-4 h-4"/> We’ll never share your email. One‑click unsubscribe.</div>
          </div>

          <div className="card p-6">
            <p className="text-brand-700 font-medium">Tonight’s sleep tip</p>
            <ul className="mt-3 space-y-3 text-slate-700">
              {samples.map((s,i)=> (<li key={i} className="flex gap-3"><Sparkles className="w-5 h-5 text-brand-600"/>{s}</li>))}
            </ul>
            <div className="mt-6 rounded-xl bg-brand-50 border border-brand-100 p-4 text-sm text-brand-900">
              Bonus: Free <strong>7‑Day Sleep Jumpstart</strong> PDF when you subscribe — quick wins for falling asleep faster.
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {['Made for busy people','Backed by sleep research','Takes 30 seconds a day'].map((t,i)=>(
            <div key={i} className="card p-5 text-center">
              <p className="text-slate-900 font-semibold">{t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEO content block */}
      <section className="max-w-6xl mx-auto px-6 pb-4">
        <h2 className="text-2xl font-serif font-bold text-slate-900">Why daily sleep tips work</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Most people want to sleep better but feel overwhelmed. Sleep Tips Daily delivers one short, practical idea each day so you can improve your <strong>sleep hygiene</strong> without learning a new system.
          We cover the fundamentals that actually move the needle: a consistent <strong>bedtime routine</strong>, light exposure to support your <strong>circadian rhythm</strong>, a cooler room for more <strong>deep sleep</strong>, and habits that increase <strong>REM</strong> and reduce <strong>insomnia</strong> symptoms.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Every tip is written in plain English and takes about 30 seconds to read. You’ll learn how to <strong>fall asleep faster</strong>, wake up more refreshed, and build sustainable habits—no gadgets required.
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-serif font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          {[
            {q:'What is Sleep Tips Daily?', a:'A free email newsletter that sends one proven sleep tip every evening to help you sleep better.'},
            {q:'How long are the tips?', a:'Each daily sleep tip is a 15–30 second read—fast to read and easy to use.'},
            {q:'Is this actually science‑backed?', a:'Yes. We translate sleep research on circadian rhythm, melatonin, deep sleep and REM into practical advice.'},
            {q:'Can I unsubscribe?', a:'Anytime with one click—every email includes an unsubscribe link.'}
          ].map((f,i)=>(
            <div key={i} className="card p-5">
              <p className="font-semibold text-slate-900">{f.q}</p>
              <p className="mt-2 text-slate-700 text-sm">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-brand-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-10 text-center">
          <h3 className="text-2xl font-serif font-bold text-slate-900">Get one sleep tip every evening</h3>
          <p className="mt-2 text-slate-700">Sleep better with simple daily tips. Free, quick, and proven.</p>
          <form onSubmit={subscribe} className="mt-4 mx-auto max-w-xl p-2 bg-white border border-slate-200 rounded-2xl flex flex-col sm:flex-row gap-2">
            <label htmlFor="email-cta" className="sr-only">Email</label>
            <div className="flex items-center gap-2 flex-1 px-3 py-2 rounded-xl border border-slate-200 bg-white">
              <Mail className="w-5 h-5 text-slate-500" aria-hidden />
              <input id="email-cta" type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter your email for daily sleep tips" className="bg-transparent outline-none text-slate-900 placeholder:text-slate-500 w-full" />
            </div>
            <button type="submit" className="px-5 py-2.5 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-700 transition">{submitted ? "You're in!" : "Subscribe free"}</button>
          </form>
          <div className="mt-3 text-xs text-slate-500 flex items-center justify-center gap-2"><Shield className="w-4 h-4" /> Privacy respected • No spam</div>
          <p className="mt-6 text-xs text-slate-500">© {new Date().getFullYear()} Sleep Tips Daily • All rights reserved</p>
        </div>
      </section>
    </div>
  )
}
