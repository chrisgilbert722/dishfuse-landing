import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import './globals.css';

export const metadata = {
  title: 'DishFuse | AI Restaurant Profit Optimizer',
  description: 'Boost restaurant profits with AI that predicts, plans, and prevents waste.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: '20px', backgroundColor: '#00bfa5', color: 'white', textAlign: 'center' }}>
          <h1>DishFuse</h1>
        </header>
        <main style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
          {children}
        </main>
        <footer style={{ padding: '20px', textAlign: 'center' }}>
          © {new Date().getFullYear()} DishFuse. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
