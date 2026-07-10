export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-20 py-8 text-center text-sm text-slate-500">
      <p>
        © {new Date().getFullYear()} My Portfolio. Built with Next.js & Tailwind
        CSS.
      </p>
    </footer>
  );
}
