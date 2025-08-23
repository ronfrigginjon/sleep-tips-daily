import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const qs = ctx.req.url?.split("?")[1] || "";
  const beehiivURL = `https://api.beehiiv.com/v2/subscriptions/confirm${qs ? `?${qs}` : ""}`;

  try {
    const resp = await fetch(beehiivURL, { method: "GET" });
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

export default function Confirm() { return null; }
