import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import './globals.css';

export const metadata = {
  title: 'DishFuse | AI Restaurant Profit Optimizer',
  description:
    'Boost restaurant profits with AI that predicts, plans, and prevents waste.',
};

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <html lang="en">
      <body
        style={{
          backgroundColor: '#0f172a',
          color: 'white',
          fontFamily: 'Inter, sans-serif',
          margin: 0,
          padding: 0,
        }}
      >
        {/* Header */}
        <header
          style={{
            padding: '20px',
            backgroundColor: '#00bfa5',
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            letterSpacing: '1px',
          }}
        >
          DishFuse
        </header>

        {/* Main Content */}
        <main
          style={{
            padding: '40px',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {children}
        </main>

        {/* Footer */}
        <footer
          style={{
            padding: '20px',
            textAlign: 'center',
            opacity: 0.8,
            borderTop: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          © {new Date().getFullYear()} DishFuse. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
