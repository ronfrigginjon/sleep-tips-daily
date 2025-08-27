// pages/privacy.tsx
import Head from "next/head";

export default function PrivacyPolicy() {
  const updated = "August 2025"; // Update when you make changes

  return (
    <>
      <Head>
        <title>Privacy Policy • Sleep Tips Daily</title>
        <meta
          name="description"
          content="Sleep Tips Daily Privacy Policy — how we collect, use, and protect your data."
        />
        <link rel="canonical" href="https://sleeptipsdaily.com/privacy" />
      </Head>

      <main style={{ padding: "3rem 1.25rem", maxWidth: 880, margin: "0 auto" }}>
        <header style={{ marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "2rem", lineHeight: 1.2, margin: 0 }}>Privacy Policy</h1>
          <p style={{ color: "#6b7280", marginTop: "0.5rem" }}>
            Last updated: {updated}
          </p>
        </header>

        <section style={{ display: "grid", gap: "2rem" }}>
          <div>
            <h2 style={{ fontSize: "1.25rem", margin: "0 0 .5rem" }}>Who we are</h2>
            <p style={{ margin: 0 }}>
              <strong>Sleep Tips Daily</strong> (“we,” “us,” or “our”) operates{" "}
              <a href="https://sleeptipsdaily.com">sleeptipsdaily.com</a> and
              publishes a nightly email newsletter with short, science-backed sleep tips.
              We’re committed to protecting your privacy and handling data responsibly.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.25rem", margin: "0 0 .5rem" }}>Information we collect</h2>
            <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
              <li>
                <strong>Newsletter signup:</strong> your email address when you subscribe.
              </li>
              <li>
                <strong>Analytics & device data:</strong> non-identifying information (e.g., page
                views, referrers, approximate location, and device/browser data) collected via
                common analytics tools and server logs.
              </li>
              <li>
                <strong>Email engagement:</strong> basic metrics like opens and link clicks to help
                us improve content and deliverability.
              </li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: "1.25rem", margin: "0 0 .5rem" }}>How we use information</h2>
            <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
              <li>To send our nightly email and manage your subscription.</li>
              <li>To improve site performance, content quality, and user experience.</li>
              <li>
                To recommend relevant products or services. Some links are affiliate links; if you
                buy through them, we may earn a commission at no extra cost to you.
              </li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: "1.25rem", margin: "0 0 .5rem" }}>Affiliate disclosure</h2>
            <p style={{ margin: 0 }}>
              We participate in affiliate programs. Links in our emails and on our site may be
              affiliate links. If you purchase through these links, we may earn a commission. This
              supports our free newsletter and operations.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.25rem", margin: "0 0 .5rem" }}>Cookies & tracking</h2>
            <p style={{ margin: 0 }}>
              We may use cookies and similar technologies to remember preferences and measure
              performance. You can control cookies through your browser settings. Disabling cookies
              may affect some site functionality.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.25rem", margin: "0 0 .5rem" }}>Email choices & your rights</h2>
            <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
              <li>
                <strong>Unsubscribe anytime:</strong> every email includes an “unsubscribe” link.
              </li>
              <li>
                <strong>Data requests:</strong> you may request access, correction, or deletion of
                your personal data by contacting{" "}
                <a href="mailto:hello@sleeptipsdaily.com">hello@sleeptipsdaily.com</a>.
              </li>
              <li>
                Depending on your location, you may have additional rights under applicable laws
                (e.g., GDPR/CCPA).
              </li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: "1.25rem", margin: "0 0 .5rem" }}>Data retention & security</h2>
            <p style={{ margin: 0 }}>
              We keep personal data only as long as necessary for the purposes described above or as
              required by law. We use reasonable safeguards to protect personal data; however, no
              method of transmission or storage is 100% secure.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.25rem", margin: "0 0 .5rem" }}>Third-party services</h2>
            <p style={{ margin: 0 }}>
              We may use reputable third-party providers (e.g., email service providers, analytics,
              and affiliate networks) to operate our site and newsletter. These providers process
              data on our behalf pursuant to their own policies and applicable agreements.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.25rem", margin: "0 0 .5rem" }}>Children’s privacy</h2>
            <p style={{ margin: 0 }}>
              Our content is intended for adults and is not directed to children under 13. We do not
              knowingly collect personal information from children under 13.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.25rem", margin: "0 0 .5rem" }}>Policy updates</h2>
            <p style={{ margin: 0 }}>
              We may update this Privacy Policy from time to time. Material changes will be posted
              on this page with an updated “Last updated” date.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.25rem", margin: "0 0 .5rem" }}>Contact</h2>
            <p style={{ margin: 0 }}>
              Questions? Contact us at{" "}
              <a href="mailto:hello@sleeptipsdaily.com">hello@sleeptipsdaily.com</a>.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
