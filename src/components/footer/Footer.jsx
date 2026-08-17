export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 mt-5 py-6 text-center text-sm text-slate-500 dark:text-slate-400 transition-colors">
      <p>
        © {new Date().getFullYear()} Kamrul Islam&apos;s Portfolio. Engineered with
        Next.js 16 & Tailwind CSS v4.
      </p>
    </footer>
  );
}
