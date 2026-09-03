import { motion, useReducedMotion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const stages = ['DATA', 'CLEAN', 'ANALYZE', 'VISUALIZE', 'MODEL', 'INSIGHT']

const Toolkit = () => {
  const reducedMotion = useReducedMotion()

  return (
    <section id="toolkit" className="section-shell">
      <SectionHeading eyebrow="Workflow" title="My Data Science Toolkit" />
      <div className="glass rounded-2xl p-6">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {stages.map((stage, index) => (
            <div key={stage} className="relative">
              <motion.div
                initial={reducedMotion ? false : { opacity: 0, y: 8 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.5 }}
                className="rounded-xl border border-sky-200/70 bg-sky-500/10 px-4 py-4 text-center text-sm font-semibold tracking-wide text-sky-700 dark:border-slate-700 dark:text-sky-200"
              >
                {stage}
              </motion.div>
              {index < stages.length - 1 ? (
                <motion.span
                  aria-hidden="true"
                  className="absolute -right-2 top-1/2 hidden h-0.5 w-4 -translate-y-1/2 bg-gradient-to-r from-sky-500 to-indigo-500 lg:block"
                  animate={reducedMotion ? undefined : { opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.15 }}
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Toolkit
