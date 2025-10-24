// app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "DishFuse | AI Restaurant Optimizer",
  description:
    "Boost restaurant profits with AI that predicts, plans, and prevents waste.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white antialiased">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-900/80 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
            <a href="/" className="flex items-center gap-3">
              <img
                src="/logo-header.png"
                alt="DishFuse"
                className="h-9 w-auto glow-logo"
              />
              <span className="sr-only">DishFuse</span>
            </a>

            <nav className="hidden items-center gap-6 text-sm md:flex">
              <a href="#features" className="hover:text-emerald-400">Features</a>
              <a href="#chat" className="hover:text-emerald-400">Live Demo</a>
              <a href="#pricing" className="hover:text-emerald-400">Pricing</a>
              <a
                href="#contact"
                className="rounded-full bg-gradient-to-r from-emerald-400 to-blue-500 px-4 py-2 font-semibold text-white hover:scale-105 transition"
              >
                Start Free Trial
              </a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-slate-900">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-10 md:flex-row md:justify-between">
            <img
              src="/logo-footer.png"
              alt="DishFuse"
              className="h-8 w-auto opacity-90"
            />
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} DishFuse. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
