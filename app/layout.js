import { Jost } from "next/font/google";
import "./globals.css";
const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost", // Optional: Define a custom CSS variable
});

export const metadata = {
  title: "Coffee Shop",
  description: "Coffee Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.variable} antialiased`}>{children}</body>
    </html>
  );
}
