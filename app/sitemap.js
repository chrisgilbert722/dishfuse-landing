export default async function sitemap() {
const baseUrl = "https://dishfuse.com";
const routes = ["", "#features", "#demo", "#pricing", "#testimonials", "#cta"].map(
(route) => ({
url: `${baseUrl}/${route}`,
lastModified: new Date().toISOString(),
changeFrequency: "weekly",
priority: route === "" ? 1.0 : 0.8,
})
);
return routes;
}
