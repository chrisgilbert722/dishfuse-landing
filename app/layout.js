import "./globals.css";

// ✅ Dynamic Meta Generation
export const metadata = {
title: {
default: "DishFuse — AI that turns food costs into predictable profit",
template: "%s | DishFuse",
},
description:
"DishFuse helps restaurants increase profit, forecast inventory, and cut waste with AI. Price with confidence. Order exactly what you need. See profit clearly.",
openGraph: {
title: "DishFuse — AI for Restaurant Profit",
description:
"Increase margins, predict inventory, reduce waste. See how owners get answers in seconds.",
url: "https://dishfuse.com",
siteName: "DishFuse",
images: [
{
url: "https://dishfuse.com/logo-footer.png",
width: 1200,
height: 630,
alt: "DishFuse logo — AI restaurant profit platform",
},
],
locale: "en_US",
type: "website",
},
twitter: {
card: "summary_large_image",
title: "DishFuse — AI for Restaurant Profit",
description:
"Boost margins, forecast inventory, and cut waste with DishFuse AI.",
images: ["https://dishfuse.com/logo-footer.png"],
creator: "@dishfuse_ai",
},
icons: {
icon: "/favicon.png",
},
};

// Optional analytics IDs (fill later)
const GA_ID = "";
const FB_PIXEL_ID = "";

export default function RootLayout({ children }) {
// ✅ JSON-LD Schema
const organizationSchema = {
"@context": "https://schema.org",
"@type": "Organization",
name: "DishFuse",
url: "https://dishfuse.com",
logo: "https://dishfuse.com/logo-footer.png",
sameAs: [
"https://www.facebook.com/dishfuse",
"https://www.instagram.com/dishfuse",
"https://www.linkedin.com/company/dishfuse",
],
contactPoint: {
"@type": "ContactPoint",
telephone: "+1-800-555-0199",
contactType: "Customer Support",
},
aggregateRating: {
"@type": "AggregateRating",
ratingValue: "4.9",
reviewCount: "187",
},
};

const faqSchema = {
"@context": "https://schema.org",
"@type": "FAQPage",
mainEntity: [
{
"@type": "Question",
name: "What is DishFuse?",
acceptedAnswer: {
"@type": "Answer",
text: "DishFuse is an AI platform that helps restaurants turn food costs into predictable profits through menu pricing, inventory forecasting, and waste reduction.",
},
},
{
"@type": "Question",
name: "How does DishFuse help restaurants save money?",
acceptedAnswer: {
"@type": "Answer",
text: "DishFuse predicts ingredient needs, optimizes menu pricing, and cuts waste — helping restaurants increase margins by up to 27%.",
},
},
{
"@type": "Question",
name: "Is DishFuse easy to set up?",
acceptedAnswer: {
"@type": "Answer",
text: "Yes! Most restaurants are up and running in under 60 minutes. No technical experience required.",
},
},
],
};

const localBusinessSchema = {
"@context": "https://schema.org",
"@type": "LocalBusiness",
name: "DishFuse",
image: "https://dishfuse.com/logo-header.png",
url: "https://dishfuse.com",
telephone: "+1-555-555-5555",
priceRange: "$$",
description:
"AI restaurant technology provider helping kitchens boost profits with smart menu pricing, forecasting, and waste reduction.",
address: {
"@type": "PostalAddress",
streetAddress: "123 Main Street",
addressLocality: "Miami",
addressRegion: "FL",
postalCode: "33101",
addressCountry: "US",
},
openingHours: "Mo-Fr 09:00-17:00",
};

const imageObjectSchema = {
"@context": "https://schema.org",
"@type": "ImageObject",
contentUrl: "https://dishfuse.com/logo-footer.png",
description: "DishFuse AI logo representing automated restaurant profit tools.",
author: {
"@type": "Organization",
name: "DishFuse",
},
};

const videoObjectSchema = {
"@context": "https://schema.org",
"@type": "VideoObject",
name: "DishFuse AI — Predictable Profit Demo",
description:
"Watch how DishFuse AI helps restaurants reduce waste and increase profit with predictive analytics.",
thumbnailUrl: "https://dishfuse.com/logo-header.png",
uploadDate: "2025-01-01",
duration: "PT1M",
contentUrl:
"https://cdn.coverr.co/videos/coverr-chef-preparing-food-in-the-kitchen-1080p.mp4",
embedUrl: "https://dishfuse.com/#demo",
publisher: {
"@type": "Organization",
name: "DishFuse",
logo: {
"@type": "ImageObject",
url: "https://dishfuse.com/logo-footer.png",
},
},
};

return (
<html lang="en">
<head>
{/* ✅ Fonts */}
<link
rel="preload"
href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap"
as="style"
onLoad="this.rel='stylesheet'"
/>
<noscript>
<link
rel="stylesheet"
href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap"
/>
</noscript>

{/* ✅ Image SEO tags */}
<meta property="og:image" content="https://dishfuse.com/logo-footer.png" />
<meta property="og:image:alt" content="DishFuse AI logo and restaurant platform" />
<meta name="twitter:image:alt" content="DishFuse AI platform preview" />
<meta name="robots" content="index, follow, max-image-preview:large" />

{/* ✅ Theme */}
<meta name="theme-color" content="#0B1222" />
<meta name="color-scheme" content="dark light" />

{/* ✅ Structured Data */}
{[organizationSchema, faqSchema, localBusinessSchema, imageObjectSchema, videoObjectSchema].map(
(schema, i) => (
<script
key={i}
type="application/ld+json"
dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
/>
)
)}

{/* ✅ Google Analytics */}
{GA_ID && (
<>
<script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
<script
dangerouslySetInnerHTML={{
__html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');
`,
}}
/>
</>
)}

{/* ✅ Facebook Pixel */}
{FB_PIXEL_ID && (
<>
<script
dangerouslySetInnerHTML={{
__html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${FB_PIXEL_ID}');
fbq('track', 'PageView');
`,
}}
/>
<noscript>
<img
height="1"
width="1"
style={{ display: "none" }}
src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
alt=""
/>
</noscript>
</>
)}
</head>

<body
style={{
fontFamily: "'Inter', sans-serif",
backgroundColor: "#0B1222",
color: "#FFFFFF",
overflowX: "hidden",
margin: 0,
padding: 0,
}}
>
{children}
</body>
</html>
);
}
	
