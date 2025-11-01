import "./globals.css";
import Script from "next/script";

const PROD_URL = "https://dishfuse-landing-mpjm.vercel.app";

export const metadata = {
  metadataBase: new URL(PROD_URL),
  title: "DishFuse — AI for Restaurants | Menu Pricing & Profit Forecasting",
  description:
    "Boost restaurant profits with AI-powered menu pricing, demand forecasting, and waste reduction — crafted for higher margins and smarter decisions.",
  alternates: { canonical: PROD_URL },
  openGraph: {
    title: "DishFuse — AI Menu Pricing & Profit Forecasting",
    description:
      "DishFuse automatically prices menus, forecasts demand, and reduces waste so margins rise while you work fewer hours.",
    url: PROD_URL,
    siteName: "DishFuse",
    images: [{ url: "/logo-header.png", width: 1200, height: 630, alt: "DishFuse" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DishFuse — AI for Restaurants",
    description:
      "AI that turns food costs into predictable profit with menu pricing & forecasting.",
    images: ["/logo-header.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  const GA4_ID = process.env.NEXT_PUBLIC_GA_ID || "G-PG2RDGN5LR";
  const META_PIXEL = process.env.NEXT_PUBLIC_META_PIXEL || "1558304621869781";

  return (
    <html lang="en">
      <head>
        {/* ---- Google Analytics (GA4) ---- */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA4_ID}');
          `}
        </Script>

        {/* ---- Meta Pixel ---- */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){
              n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];
              t=b.createElement(e);t.async=!0;t.src=v;
              s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)
            }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </head>

      <body className="min-h-screen bg-[#0B1222] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
