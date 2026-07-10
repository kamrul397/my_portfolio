import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Roboto_Condensed } from "next/font/google";

// Define the clean, modern body font
// Define the font correctly
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-roboto-condensed", // Clean variable name for Tailwind
});
export const metadata = {
  title: "My Developer Portfolio",
  description:
    "A showcase of my web development projects built with Next.js and JavaScript.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${robotoCondensed.variable} antialiased bg-slate-50 text-slate-900 font-sans`}
      >
        <div className="max-w-7xl mx-auto">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
