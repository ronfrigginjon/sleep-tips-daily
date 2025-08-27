// pages/privacy.tsx
export default function PrivacyPolicy() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h1>Privacy Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <p>
        Sleep Tips Daily (“we,” “our,” or “us”) operates https://sleeptipsdaily.com.
        We are committed to protecting your privacy and ensuring your personal information
        is handled responsibly.
      </p>

      <h2>Information We Collect</h2>
      <p>
        When you subscribe to our newsletter, we collect your email address.
        We may also collect anonymous usage data through analytics tools.
      </p>

      <h2>How We Use Information</h2>
      <ul>
        <li>To send you our daily newsletter with sleep improvement tips</li>
        <li>To recommend relevant products and services from partners</li>
        <li>To improve our website and newsletter content</li>
      </ul>

      <h2>Affiliate Disclosure</h2>
      <p>
        Sleep Tips Daily participates in affiliate programs. Some links in our emails
        and on our website may be affiliate links, meaning we may earn a commission if
        you make a purchase through them. This comes at no additional cost to you.
      </p>

      <h2>Cookies</h2>
      <p>
        Our site may use cookies to enhance your experience. You can disable cookies in
        your browser settings if you prefer.
      </p>

      <h2>Your Rights</h2>
      <p>
        You may unsubscribe from our emails at any time by clicking the “unsubscribe”
        link in the footer of any email. You may also request deletion of your personal
        data by contacting us at hello@sleeptipsdaily.com.
      </p>

      <h2>Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us at hello@sleeptipsdaily.com.</p>
    </div>
  );
}
