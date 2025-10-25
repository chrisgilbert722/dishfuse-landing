export default async function sitemap() {
const baseUrl = "https://dishfuse.com";

// ✅ Use proper page paths only — no #anchors
const routes = [
"",
"features",
"demo",
"pricing",
"testimonials",
"cta",
].map((route) => ({
url: `${baseUrl}/${route}`,
lastModified: new Date().toISOString(),
changeFrequency: "weekly",
priority: route === "" ? 1.0 : 0.8,
}));

// ✅ Return as an array
return [...routes];
}
