import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "DishFuse | AI-Powered Restaurant Optimization",
  description:
    "DishFuse uses AI to help restaurants boost profits, reduce waste, and optimize menu pricing automatically.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0f172a] text-white font-sans antialiased">
        {/* === HEADER === */}
        <Header />

        {/* === PAGE CONTENT === */}
        <main className="pt-20">{children}</main>

        {/* === FOOTER === */}
        <Footer />
      </body>
    </html>
  );
}
