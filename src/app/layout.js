import "./globals.css";
import BackgroundGrid from "@/components/BackgroundGrid";
import Navbar from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import CommandPalette from "@/components/CommandPalette";
import { Roboto } from "next/font/google";
import { ToastContainer } from "react-toastify";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata = {
  title: "Kamrul Islam | Full-Stack Developer & TypeScript Engineer",
  description:
    "Full-Stack Web Developer portfolio of Kamrul Islam. Engineered with Next.js 16, TypeScript, React 19, Node.js, Express, and MongoDB.",
  icons: {
    icon: "/kamrul_profile_pic.jpg",
    shortcut: "/kamrul_profile_pic.jpg",
    apple: "/kamrul_profile_pic.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${roboto.variable} min-h-full flex flex-col font-sans`}
      >
        <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden">
          <BackgroundGrid />
          <Navbar />
          <CommandPalette />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            theme="dark"
          />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
