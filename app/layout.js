// app/layout.js
import "./globals.css";

export const metadata = {
  title: "DishFuse | AI Restaurant Assistant",
  description: "Boost restaurant profits with DishFuse AI that predicts, plans, and prevents waste.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}

