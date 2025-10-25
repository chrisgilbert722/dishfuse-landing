export default async function sitemap() {
const baseUrl = "https://dishfuse.com"; // or your Vercel domain

return [
{
url: `${baseUrl}/`,
lastModified: new Date(),
changeFrequency: "weekly",
priority: 1.0,
},
{
url: `${baseUrl}/#features`,
lastModified: new Date(),
changeFrequency: "monthly",
priority: 0.8,
},
{
url: `${baseUrl}/#demo`,
lastModified: new Date(),
changeFrequency: "monthly",
priority: 0.8,
},
{
url: `${baseUrl}/#pricing`,
lastModified: new Date(),
changeFrequency: "monthly",
priority: 0.9,
},
{
url: `${baseUrl}/#testimonials`,
lastModified: new Date(),
changeFrequency: "monthly",
priority: 0.7,
},
];
}
	
