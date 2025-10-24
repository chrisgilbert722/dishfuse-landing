export const metadata = {
  title: "DishFuse | AI Restaurant Profit Optimizer",
  description: "Boost restaurant profits with AI that predicts, plans, and prevents waste."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Inter, sans-serif', backgroundColor: '#f9f9f9' }}>
        <header style={{ padding: '20px', backgroundColor: '#00BFA5', color: 'white', textAlign: 'center' }}>
          <h2>DishFuse</h2>
        </header>

        <main>{children}</main>

        <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#001f1f', color: '#fff', marginTop: '40px' }}>
          <p>© 2025 DishFuse. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
