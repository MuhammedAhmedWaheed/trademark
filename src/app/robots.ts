export default function robots() {
  const base = "https://www.legalmarkexperts.com";
  return { rules: [{ userAgent: "*", allow: "/" }], sitemap: `${base}/sitemap.xml` };
}
