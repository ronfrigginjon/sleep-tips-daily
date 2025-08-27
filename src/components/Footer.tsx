// src/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ marginTop: "3rem", padding: "1.5rem 0", borderTop: "1px solid #e5e7eb", textAlign: "center", fontSize: "0.9rem", color: "#6b7280" }}>
      <p>© {year} Sleep Tips Daily. All rights reserved.</p>
      <nav style={{ marginTop: "0.5rem" }}>
        <Link href="/privacy" style={{ margin: "0 0.75rem" }}>
          Privacy Policy
        </Link>
        <Link href="/sitemap.xml" style={{ margin: "0 0.75rem" }}>
          Sitemap
        </Link>
        <Link href="/faq" style={{ margin: "0 0.75rem" }}>
          FAQ
        </Link>
      </nav>
    </footer>
  );
}
