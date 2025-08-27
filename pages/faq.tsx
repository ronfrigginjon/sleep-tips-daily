// pages/faq.tsx
import Head from "next/head";
import Link from "next/link";

export default function FAQ() {
  return (
    <>
      <Head>
        <title>FAQ • Sleep Tips Daily</title>
        <meta
          name="description"
          content="Frequently asked questions about Sleep Tips Daily — how it works, when tips are delivered, and more."
        />
        <link rel="canonical" href="https://sleeptipsdaily.com/faq" />
      </Head>

      <main style={{ padding: "3rem 1.25rem", maxWidth: 880, margin: "0 auto" }}>
        <header style={{ marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "2rem", lineHeight: 1.2, margin: 0 }}>Frequently Asked Questions</h1>
          <p style={{ color: "#6b7280", marginTop: ".5rem" }}>
            Don’t see your question here? Email us at{" "}
            <a href="mailto:hello@sleeptipsdaily.com">hello@sleeptipsdaily.com</a>.
          </p>
        </header>

        <section style={{ display: "grid", gap: "2rem" }}>
          <div>
            <h2 style={{ fontSize: "1.25rem", margin: "0 0 .5rem" }}>What is Sleep Tips Daily?</h2>
            <p style={{ margin: 0 }}>
              A short, science-backed sleep tip delivered every evening so you can apply it before bed.
              Each email takes ~30 seconds to read.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.25rem", margin: "0 0 .5rem" }}>Is it free?</h2>
            <p style={{ margin: 0 }}>
              Yes. The nightly email is free. We may include occasional partner recommendations; if you
              buy through our links, we may earn a commission at no extra cost to you.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.25rem", margin: "0 0 .5rem" }}>When do I get the email?</h2>
            <p style={{ margin: 0 }}>
              In the evening — so you can put the tip into practice before going to sleep. We aim for a
              consistent send window each night.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.25rem", margin: "0 0 .5rem" }}>How do I unsubscribe?</h2>
            <p style={{ margin: 0 }}>
              Every email includes an “unsubscribe” link at the bottom. You can opt out anytime with one click.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.25rem", margin: "0 0 .5rem" }}>Do you give medical advice?</h2>
            <p style={{ margin: 0 }}>
              No. We share general, evidence-informed tips for healthy adults. This is not medical advice.
              If you have a sleep disorder or health condition, talk to your doctor.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.25rem", margin: "0 0 .5rem" }}>Where can I see your policies?</h2>
            <p style={{ margin: 0 }}>
              See our <Link href="/privacy">Privacy Policy</Link>. We also respect standard{" "}
              <Link href="/robots.txt">robots.txt</Link> and provide a <Link href="/sitemap.xml">sitemap</Link> for search engines.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
