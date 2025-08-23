import SEO from '@/src/components/SEO'
import Landing from '@/src/components/Landing'

export default function Home() {
  return (<>
    <SEO faqJsonLd={JSON.stringify({'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'What is Sleep Tips Daily?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'A free email newsletter that sends one proven sleep tip every morning to help you sleep better.'}}, {'@type': 'Question', 'name': 'How long are the tips?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Each daily sleep tip is a 15–30 second read—fast to read and easy to use.'}}, {'@type': 'Question', 'name': 'Is this actually science‑backed?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Yes. We translate sleep research on circadian rhythm, melatonin, deep sleep and REM into practical advice.'}}, {'@type': 'Question', 'name': 'Can I unsubscribe?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Anytime with one click—every email includes an unsubscribe link.'}}]}).replace(/</g,'\\u003c')} />
    <Landing />
  </>)
}
