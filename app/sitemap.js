export default function robots() {
const baseUrl = "https://dishfuse.com";
return {
rules: [{ userAgent: "*", allow: "/" }],
sitemap: `${baseUrl}/sitemap.xml`,
};
}
