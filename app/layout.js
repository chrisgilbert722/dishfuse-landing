"use client";
import "./globals.css";

export const metadata = {
title: "DishFuse — AI that turns food costs into predictable profit",
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
url: "/logo-footer.png",
width: 1200,
height: 630,
alt: "DishFuse logo",
},
],
locale: "en_US",
type: "website",
},
twitter: {
card: "summary_large_image",
title: "DishFuse — AI for Restaurant Profit",
description:
"Increase margins, predict inventory, reduce waste with AI.",
images: ["/logo-footer.png"],
},
icons: {
icon: "/favicon.png",
},
};

// Optional analytics IDs (fill in later)
const GA_ID = ""; // e.g. "G-XXXXXXXXXX"
const FB_PIXEL_ID = ""; // e.g. "123456789012345"

export default function RootLayout({ children }) {
return (
<html lang="en">
<head>
{/* Google Fonts Preload */}
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

{/* Global Theme Colors */}
<meta name="theme-color" content="#0B1222" />
<meta name="color-scheme" content="dark light" />

{/* Structured Data (JSON-LD) */}
<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify({
"@context": "https://schema.org",
"@type": "Organization",
name: "DishFuse",
url: "https://dishfuse.com",
logo: "https://dishfuse.com/logo-footer.png",
sameAs: [
"https://www.facebook.com/",
"https://www.instagram.com/",
"https://www.linkedin.com/",
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
review: [
{
"@type": "Review",
author: "Chef Maria Thompson",
reviewBody:
"DishFuse helped our kitchen cut waste by nearly 40%! It’s like having a personal AI food cost manager.",
reviewRating: { "@type": "Rating", ratingValue: "5" },
},
{
"@type": "Review",
author: "James Carter, Bistro 21",
reviewBody:
"Our margins have never been this consistent — we recovered thousands in waste within the first month.",
reviewRating: { "@type": "Rating", ratingValue: "5" },
},
{
"@type": "Review",
author: "Lena Ortiz, Café Luna",
reviewBody:
"DishFuse is a game changer. I finally understand which dishes are actually making money.",
reviewRating: { "@type": "Rating", ratingValue: "5" },
},
],
}),
}}
/>

{/* Google Analytics */}
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

{/* Meta Pixel */}
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
	
