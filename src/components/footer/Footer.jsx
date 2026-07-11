export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-5 py-2 text-center text-sm text-slate-500">
      <p>
        © {new Date().getFullYear()} Kamrul Islam's Portfolio. Built with
        Next.js & Tailwind CSS.
      </p>
    </footer>
  );
}
