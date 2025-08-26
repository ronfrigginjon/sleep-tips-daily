import SEO from '@/src/components/SEO'
import Landing from '@/src/components/Landing'
import Head from "next/head";

export default function Home() {
  return (<>
    <Head>
      <meta name="takeads-platform-verification" content="3abead6b-064d-4bbb-a9d9-7c550bd140a2"/>
	  <title>Sleep Tips Daily — Nightly, 30-Second Sleep Advice</title>
      <meta
        name="description"
        content="Join Sleep Tips Daily for a 30-second, science-backed sleep tip every evening. Build a better bedtime routine and sleep deeper."
      />
	  
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://sleeptipsdaily.com" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Sleep Tips Daily" />
      <meta property="og:url" content="https://sleeptipsdaily.com" />
      <meta property="og:title" content="Sleep Tips Daily — Nightly, 30-Second Sleep Advice" />
      <meta property="og:description" content="Join for nightly sleep tips to fall asleep faster and wake up refreshed." />
      <meta property="og:image" content="https://sleeptipsdaily.com/og-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://sleeptipsdaily.com" />
      <meta name="twitter:title" content="Sleep Tips Daily — Nightly, 30-Second Sleep Advice" />
      <meta name="twitter:description" content="Join for nightly sleep tips to fall asleep faster and wake up refreshed." />
      <meta name="twitter:image" content="https://sleeptipsdaily.com/og-image.png" />
    
      {/* FAQ schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What are sleep tips?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sleep tips are short, science-backed recommendations that improve your sleep quality. They include routines, habits, and adjustments like light exposure, caffeine timing, and bedroom environment."
                }
              },
              {
                "@type": "Question",
                "name": "How can Sleep Tips Daily help me?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We send you one quick, easy-to-read tip each evening. Over time, these daily tips help you build better sleep hygiene, fall asleep faster, and wake up more refreshed."
                }
              },
              {
                "@type": "Question",
                "name": "Is the newsletter free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Sleep Tips Daily is 100% free to join. We may include helpful resources and occasional partner recommendations, but the core tips are always free."
                }
              },
              {
                "@type": "Question",
                "name": "When will I receive the tips?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We deliver each tip in the evening, so you can put it into practice before going to bed. Consistency is key to improving sleep habits."
                }
              },
              {
                "@type": "Question",
                "name": "What is good sleep hygiene?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sleep hygiene refers to the daily habits and environment that support healthy sleep. Examples include keeping a consistent bedtime, limiting screen use at night, avoiding caffeine late in the day, and making your bedroom cool and dark. Practicing good sleep hygiene makes falling asleep easier and improves sleep quality."
                }
              }
            ]
          })
        }}
      />
    </Head>

	<SEO faqJsonLd={JSON.stringify({'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'What is Sleep Tips Daily?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'A free email newsletter that sends one proven sleep tip every morning to help you sleep better.'}}, {'@type': 'Question', 'name': 'How long are the tips?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Each daily sleep tip is a 15–30 second read—fast to read and easy to use.'}}, {'@type': 'Question', 'name': 'Is this actually science‑backed?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Yes. We translate sleep research on circadian rhythm, melatonin, deep sleep and REM into practical advice.'}}, {'@type': 'Question', 'name': 'Can I unsubscribe?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Anytime with one click—every email includes an unsubscribe link.'}}]}).replace(/</g,'\\u003c')} />
    <Landing />
  </>)
}
