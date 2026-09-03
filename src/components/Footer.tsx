const Footer = () => (
  <footer className="border-t border-slate-200/80 bg-white/70 dark:border-slate-800 dark:bg-slate-950/80">
    <div className="section-shell py-10">
      <p className="text-lg font-semibold text-slate-900 dark:text-white">Lovelle K Musadogera</p>
      <p className="text-sm text-slate-600 dark:text-slate-300">Data Science Student</p>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Built with curiosity, data and code.</p>
      <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300">
        <a href="mailto:lovellemusadogera@gmail.com" className="hover:text-sky-600 dark:hover:text-sky-300">
          lovellemusadogera@gmail.com
        </a>
        <span>GitHub: Add your profile link</span>
        <span>LinkedIn: Add your profile link</span>
      </div>
      <p className="mt-5 text-xs text-slate-500 dark:text-slate-400">
        © 2026 Lovelle K Musadogera. All rights reserved.
      </p>
    </div>
  </footer>
)

export default Footer
