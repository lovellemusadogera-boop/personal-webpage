import { motion, useReducedMotion } from 'framer-motion'
import { coursework } from '../data/skills'
import SectionHeading from './SectionHeading'

const Education = () => {
  const reducedMotion = useReducedMotion()

  return (
    <section id="education" className="section-shell">
      <SectionHeading eyebrow="Academic Journey" title="Education" />
      <div className="relative pl-8">
        <div className="absolute bottom-0 left-2 top-0 w-px bg-gradient-to-b from-sky-500 to-indigo-500" />
        <motion.article
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          className="glass rounded-2xl p-6"
        >
          <span className="absolute -left-[5px] mt-2 block h-3 w-3 rounded-full bg-sky-500 shadow-[0_0_0_6px_rgba(14,165,233,0.2)]" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-300">
            2025 — 2027
          </p>
          <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">Diploma in Data Science</h3>
          <p className="mt-1 text-slate-600 dark:text-slate-300">TelOne Centre for Learning, Harare, Zimbabwe</p>
          <p className="mt-2 text-sm font-semibold text-emerald-600 dark:text-emerald-300">Current Status: Year 2</p>
          <h4 className="mt-5 text-sm font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-200">
            Relevant Coursework
          </h4>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {coursework.map((course) => (
              <li
                key={course}
                className="rounded-lg border border-slate-200/80 bg-white/70 px-3 py-2 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-300"
              >
                {course}
              </li>
            ))}
          </ul>
        </motion.article>
      </div>
    </section>
  )
}

export default Education
