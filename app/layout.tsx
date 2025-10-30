import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "DishFuse — AI Menu Pricing & Inventory Forecasting",
  description:
    "AI-powered menu pricing, demand forecasting & waste prevention for restaurants. Start in under 2 hours. 14-day free trial.",
  openGraph: {
    title: "DishFuse — AI Profit for Restaurants",
    description:
      "AI menu pricing, inventory forecasting & waste prevention. Start free.",
    images: [{ url: "/og-image.jpg" }],
    type: "website",
    url: "https://dishfuse.com/",
  },
  alternates: { canonical: "https://dishfuse.com/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="preload"
          as="font"
          href="/fonts/Inter-Variable.woff2"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "DishFuse",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              offers: { "@type": "Offer", price: "49", priceCurrency: "USD" },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "137",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen text-white bg-gradient-to-b from-navy-600 to-navy-500">
        {/* GA4 */}
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXX"}');
          `}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${
            process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXX"
          }`}
          strategy="afterInteractive"
        />
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL || "000000000000000"}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=000000000000000&ev=PageView&noscript=1"
          />
        </noscript>
        {/* Tidio Chat */}
        <Script id="tidio" strategy="afterInteractive">
          {`
            (function(){
              function t(){
                var s=document.createElement('script');
                s.src='https://code.tidio.co/${
                  process.env.NEXT_PUBLIC_TIDIO_KEY || "yourkey"
                }.js';
                s.async=true;document.body.appendChild(s);
              }
              if(document.readyState==='complete') t();
              else window.addEventListener('load', t);
            })();
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}