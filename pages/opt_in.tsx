// pages/opt_in.tsx
import type { GetServerSideProps } from "next";

/**
 * Beehiiv double opt-in links currently hit:
 *   https://sleeptipsdaily.com/opt_in?opt_in_token=...&jwt_token=...
 * This page forwards the full query string to Beehiiv's confirm endpoint
 * server-side, then redirects to /thanks (confirmed or generic).
 */
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const qs = ctx.req.url?.split("?")[1] || ""; // preserve query string exactly
  const confirmURL = `https://api.beehiiv.com/v2/subscriptions/confirm${qs ? `?${qs}` : ""}`;

  try {
    const resp = await fetch(confirmURL, { method: "GET" });

    return {
      redirect: {
        destination: resp.ok ? "/thanks?confirmed=1" : "/thanks",
        permanent: false,
      },
    };
  } catch {
    return { redirect: { destination: "/thanks", permanent: false } };
  }
};

export default function OptIn() {
  return null; // never renders; we immediately redirect
}
