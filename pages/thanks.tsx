import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Thanks() {
  const { query } = useRouter();
  const confirmed = query.confirmed === "1";

  return (
    <>
      <Head>
        <title>Thanks for Subscribing | Sleep Tips Daily</title>
        <meta name="description" content="Thanks for subscribing to Sleep Tips Daily." />
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <main className="min-h-screen bg-white">
        <section className="mx-auto max-w-3xl px-6 pt-16 pb-8">
          <div className="text-center">
            <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="#3b82f6">
                <path d="M21 12.79A9 9 0 1111.21 3c.2 0 .4.01.59.03A7 7 0 0021 12.79z" />
              </svg>
            </div>

            <h1 className="text-3xl font-semibold text-slate-900">
              {confirmed ? "You're confirmed! 🎉" : "Thanks for subscribing!"}
            </h1>
            <p className="mt-3 text-slate-600">
              {confirmed
                ? "Your first nightly tip will hit your inbox tonight. Grab your welcome guide below."
                : "Please check your email to confirm your subscription. Once you confirm, we’ll send tonight’s tip and your 7-Day Sleep Jumpstart."}
            </p>
          </div>

          {!confirmed && (
            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-slate-700">
              <h2 className="text-lg font-medium text-slate-900">One more step</h2>
              <ol className="ml-5 mt-3 list-decimal space-y-2">
                <li>Open your inbox for an email from <strong>hello@sleeptipsdaily.com</strong>.</li>
                <li>Click <em>Confirm My Subscription</em>.</li>
                <li>That’s it—your nightly tips begin and your guide unlocks.</li>
              </ol>
              <p className="mt-3 text-sm">Didn’t get it? Check Promotions/Spam or <a className="text-blue-600 underline" href="mailto:hello@sleeptipsdaily.com">contact us</a>.</p>
            </div>
          )}

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Welcome package</h3>
              <ul className="mt-3 space-y-2 text-slate-700">
                <li>• 7-Day Sleep Jumpstart (PDF)</li>
                <li>• Nightly 15–30s tips around 8 PM</li>
                <li>• Zero spam. Unsubscribe anytime.</li>
              </ul>

              {/* Only show download after confirmation */}
              {confirmed && (
                <div className="mt-5">
                  <a
                    className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700 transition"
                    href="/7-day-sleep-jumpstart.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download your guide
                  </a>
                </div>
              )}
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Tonight’s first tip (sneak peek)</h3>
              <p className="mt-3 text-slate-700">
                Keep devices out of reach for the last 30 minutes before bed. Dim lights, jot tomorrow’s top task, and read a few pages.
              </p>
              <div className="mt-4 rounded-xl bg-blue-50 p-4 text-sm text-slate-700">
                <strong>Pro move:</strong> set a nightly “Wind-Down” alarm for 8:00 PM.
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link href="/" className="text-blue-600 underline hover:text-blue-700">Back to Home</Link>
          </div>
        </section>
      </main>
    </>
  );
}
