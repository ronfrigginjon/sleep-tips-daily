import SEO from '@/src/components/SEO'
import Landing from '@/src/components/Landing'
import Head from "next/head";

export default function Home() {
  return (<>
    <Head>
        <title>Sleep Tips Daily — Nightly, 30-Second Sleep Advice</title>
        <meta
          name="description"
          content="Join Sleep Tips Daily for a 30-second, science-backed sleep tip every evening. Build a better bedtime routine and sleep deeper."
        />
        <meta name="robots" content="index, follow" />

        {/* Canonical */}
        <link rel="canonical" href="https://sleeptipsdaily.com" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sleep Tips Daily — Nightly, 30-Second Sleep Advice" />
        <meta property="og:description" content="A quick nightly tip to help you fall asleep faster and wake up refreshed." />
        <meta property="og:url" content="https://sleeptipsdaily.com" />
        <meta property="og:image" content="https://sleeptipsdaily.com/og-preview.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sleep Tips Daily — Nightly, 30-Second Sleep Advice" />
        <meta name="twitter:description" content="A quick nightly tip delivered to your inbox. Sleep better, nightly." />
        <meta name="twitter:image" content="https://sleeptipsdaily.com/og-preview.png" />
     </Head>
    
	<SEO faqJsonLd={JSON.stringify({'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'What is Sleep Tips Daily?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'A free email newsletter that sends one proven sleep tip every morning to help you sleep better.'}}, {'@type': 'Question', 'name': 'How long are the tips?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Each daily sleep tip is a 15–30 second read—fast to read and easy to use.'}}, {'@type': 'Question', 'name': 'Is this actually science‑backed?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Yes. We translate sleep research on circadian rhythm, melatonin, deep sleep and REM into practical advice.'}}, {'@type': 'Question', 'name': 'Can I unsubscribe?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Anytime with one click—every email includes an unsubscribe link.'}}]}).replace(/</g,'\\u003c')} />
    <Landing />
  </>)
}
