import "./globals.css";

export const metadata = {
  title: "DishFuse — AI Menu Pricing & Inventory Forecasting",
  description: "AI tools that turn food costs into predictable profit.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          backgroundColor: "#0B1222",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
