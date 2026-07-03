export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://pawandhaka.vercel.app/sitemap.xml",
  };
}