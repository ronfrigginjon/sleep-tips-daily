import Head from "next/head";
import Link from "next/link";
import { useEffect, useMemo } from "react";
import { useRouter } from "next/router";

export default function Thanks() {
  const router = useRouter();

  // Read query flags to tailor the message:
  // /thanks            -> generic after form submit
  // /thanks?confirmed=1 -> after double opt-in confirm
  // /thanks?dl=1        -> show direct download button
  const confirmed = router.query.confirmed === "1";
  const showDirectDownload = router.query.dl === "1";

  const title = useMemo(
    () => (confirmed ? "You're confirmed! 🎉" : "Thanks for subscribing!"),
    [confirmed]
  );

  const subtitle = useMemo(() => {
    if (confirmed) {
      return "Your first nightly tip will hit your inbox tonight.";
    }
    return "Please check your email to confirm your subscription.";
  }, [confirmed]);

  return (
    <>
      <Head>
        <title>Thanks for Subscribing | Sleep Tips Daily</title>
        <meta
          name="description"
          content="Thanks for subscribing to Sleep Tips Daily. Check your email to confirm and receive your 7-Day Sleep Jumpstart guide."
        />
        {/* optional: prevent indexing */}
        <meta name="robots" content="noindex,nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-white">
        <section className="mx-auto max-w-3xl px-6 pt-16 pb-8">
          <div className="text-center">
            <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center">
              {/* simple moon icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="#3b82f6">
                <path d="M21 12.79A9 9 0 1111.21 3c.2 0 .4.01.59.03A7 7 0 0021 12.79z" />
              </svg>
            </div>
            <h1 className="text-3xl font-semibold text-slate-900">{title}</h1>
            <p className="mt-3 text-slate-600">{subtitle}</p>
          </div>

          {!confirmed && (
            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-slate-700">
              <h2 className="text-lg font-medium text-slate-900">One more step</h2>
              <ol className="ml-5 mt-3 list-decimal space-y-2">
                <li>Open your inbox for an email from <strong>hello@sleeptipsdaily.com</strong>.</li>
                <li>Click <em>Confirm My Subscription</em>.</li>
                <li>You’ll get tonight’s tip and your bonus guide.</li>
              </ol>
              <p className="mt-3 text-sm">Didn’t get it? Check Promotions/Spam or <a className="text-blue-600 underline" href="mailto:hello@sleeptipsdaily.com">contact us</a>.</p>
            </div>
          )}

          {/* Welcome package panel (always visible) */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900">What’s inside your welcome package</h3>
              <ul className="mt-3 space-y-2 text-slate-700">
                <li>• <strong>The 7-Day Sleep Jumpstart</strong> PDF</li>
                <li>• Nightly 15–30 second tips at ~8 PM</li>
                <li>• Zero spam. Unsubscribe anytime.</li>
              </ul>

              <div className="mt-5">
                <a
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700 transition"
                  href="/7-day-sleep-jumpstart.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {confirmed || showDirectDownload ? "Download your guide" : "Preview the guide"}
                </a>
              </div>
              {!confirmed && (
                <p className="mt-2 text-xs text-slate-500">
                  The link above is a preview. Confirm your email to ensure future tips arrive.
                </p>
              )}
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Tonight’s first tip (sneak peek)</h3>
              <p className="mt-3 text-slate-700">
                Keep devices out of reach for the last 30 minutes before bed. Blue light and doom-scrolling cue your brain to stay awake. 
                Try a short wind-down: dim lights, jot tomorrow’s top task, and read a few pages.
              </p>
              <div className="mt-4 rounded-xl bg-blue-50 p-4 text-sm text-slate-700">
                <strong>Pro move:</strong> set a nightly “Wind-Down” alarm for 8:00 PM.
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/"
              className="text-blue-600 underline hover:text-blue-700"
            >
              Back to Home
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
