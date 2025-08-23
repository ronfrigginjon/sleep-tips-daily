import Head from 'next/head'

type SEOProps = { title?: string; description?: string; ogImage?: string; url?: string; faqJsonLd?: string }

export default function SEO({
  title = 'Sleep Tips Daily – Free Daily Sleep Tips to Fall Asleep Faster & Wake Up Rested',
  description = 'Free daily sleep tips by email. Learn how to sleep better with 30‑second, science‑backed sleep hygiene tips, bedtime routines, circadian rhythm insights, and practical ways to fall asleep faster.',
  ogImage = '/og-image.png',
  url = 'https://sleeptipsdaily.com',
  faqJsonLd
}: SEOProps) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Sleep Tips Daily',
    'url': url,
    'logo': '/favicon.svg',
    'sameAs': []
  }
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="sleep tips daily, sleep tips, better sleep, fall asleep faster, sleep hygiene, bedtime routine, circadian rhythm, melatonin, deep sleep, REM, insomnia tips" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(orgJsonLd)}} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{__html: faqJsonLd}} />}
    </Head>
  )
}
