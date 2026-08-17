import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Roboto } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@/context/ThemeContext";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata = {
  title: "Kamrul Islam | Full-Stack TypeScript & Next.js Developer Portfolio",
  description:
    "Explore full-stack web applications, REST APIs, Stripe subscription workflows, and modern frontend designs built by Kamrul Islam using Next.js 16, React 19, TypeScript, Node.js, Express, and MongoDB.",
  icons: {
    icon: "/kamrul-islam.png",
    shortcut: "/kamrul-islam.png",
    apple: "/kamrul-islam.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${roboto.variable} antialiased font-sans bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen relative overflow-x-hidden transition-colors duration-300`}
      >
        <ThemeProvider>
          {/* Global Ambient Glow Background Orbs with dark mode variants */}
          <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
          <div className="fixed top-1/3 right-10 w-[600px] h-[600px] bg-indigo-500/5 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
          <div className="fixed bottom-20 left-10 w-[600px] h-[600px] bg-violet-500/5 dark:bg-violet-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

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
        </ThemeProvider>
      </body>
    </html>
  );
}
