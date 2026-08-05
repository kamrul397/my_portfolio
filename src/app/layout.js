import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Roboto_Condensed } from "next/font/google";
import { ToastContainer } from "react-toastify";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-roboto-condensed",
});

export const metadata = {
  title: "Kamrul Islam | Junior Full-Stack MERN & Next.js Developer Portfolio",
  description:
    "Explore full-stack web applications, REST APIs, and modern frontend designs built by Kamrul Islam using Next.js 16, React 19, Node.js, Express, and MongoDB.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${robotoCondensed.variable} antialiased bg-gradient-to-br from-slate-50 via-indigo-50/25 to-slate-100 text-slate-900 font-sans min-h-screen relative overflow-x-hidden`}
      >
        {/* Global Ambient Glow Background Orbs */}
        <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="fixed top-1/3 right-10 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="fixed bottom-20 left-10 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto">
          <Header />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            theme="colored"
          />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
