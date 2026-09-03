import { motion, useReducedMotion } from 'framer-motion'
import { sectionHighlights } from '../data/skills'
import SectionHeading from './SectionHeading'

const About = () => {
  const reducedMotion = useReducedMotion()

  return (
    <section id="about" className="section-shell">
      <SectionHeading eyebrow="Introduction" title="About Me" />
      <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          className="space-y-4 text-slate-600 dark:text-slate-300"
        >
          <p>
            I am a Diploma in Data Science student with a growing foundation in programming, databases,
            statistics, data visualization, cloud computing, and data analytics. I enjoy solving practical
            problems using technology and continuously developing my technical and analytical skills.
          </p>
          <div className="flex flex-wrap gap-2">
            {sectionHighlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-300/70 bg-white/60 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="font-medium text-slate-800 dark:text-slate-200">
            Currently seeking an industrial attachment opportunity where I can apply my skills, learn from
            experienced professionals, and contribute to meaningful projects.
          </p>
        </motion.div>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          className="glass rounded-2xl p-6"
          aria-label="Profile placeholder card"
        >
          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/20 to-indigo-500/20 text-3xl font-bold text-sky-700 dark:text-sky-200">
            LKM
          </div>
          <h3 className="mt-4 text-center text-lg font-semibold text-slate-900 dark:text-white">
            Lovelle K Musadogera
          </h3>
          <p className="text-center text-sm text-slate-600 dark:text-slate-300">Data Science Student</p>
          <dl className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <div className="flex items-center justify-between">
              <dt>Location</dt>
              <dd>Harare, Zimbabwe</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt>Education</dt>
              <dd>Diploma in Data Science</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt>Expected Completion</dt>
              <dd>2027</dd>
            </div>
          </dl>
        </motion.div>
      </div>
    </section>
  )
}

export default About
