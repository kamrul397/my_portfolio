export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-800/80 mt-12 py-8 text-center text-xs font-mono text-gray-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Kamrul Islam. Engineered with Next.js 16 & TypeScript.</p>
        <p className="text-gray-400">
          Built with <span className="text-[#38bdf8]">Next.js</span> & <span className="text-[#bef264]">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
