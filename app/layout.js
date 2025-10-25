// app/layout.js
import "./globals.css";

export const metadata = {
  title: "DishFuse | AI Restaurant Assistant",
  description: "Boost restaurant profits with AI that predicts, plans, and prevents waste.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "black", color: "white" }}>
        {children}
      </body>
    </html>
  );
}
