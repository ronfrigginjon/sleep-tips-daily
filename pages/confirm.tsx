// pages/confirm.tsx
import type { GetServerSideProps } from "next";

/**
 * Handles Beehiiv double-opt-in links like:
 * https://sleeptipsdaily.com/confirm?token=...&publication_id=...
 * We forward the full query string to Beehiiv's confirm endpoint server-side,
 * then redirect the user to /thanks (confirmed state on success).
 */
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Preserve Beehiiv's query parameters
  const qs = ctx.req.url?.split("?")[1] || "";
  const confirmURL = `https://api.beehiiv.com/v2/subscriptions/confirm${qs ? `?${qs}` : ""}`;

  try {
    const resp = await fetch(confirmURL, { method: "GET" });

    // If token is valid → confirmed
    if (resp.ok) {
      return { redirect: { destination: "/thanks?confirmed=1", permanent: false } };
    }

    // If token invalid/expired → send to generic thanks (no download)
    return { redirect: { destination: "/thanks", permanent: false } };
  } catch {
    // Network errors → fail gracefully
    return { redirect: { destination: "/thanks", permanent: false } };
  }
};

export default function Confirm() {
  // Never actually renders due to redirect above
  return null;
}
