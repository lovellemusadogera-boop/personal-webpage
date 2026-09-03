import { motion, useReducedMotion } from 'framer-motion'
import { levelStyles, skillCategories } from '../data/skills'
import SectionHeading from './SectionHeading'

const Skills = () => {
  const reducedMotion = useReducedMotion()

  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Capabilities"
        title="Skills"
        description="A practical foundation built through coursework and hands-on academic projects."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category, index) => {
          const Icon = category.icon
          return (
            <motion.article
              key={category.id}
              initial={reducedMotion ? false : { opacity: 0, y: 14 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.05 }}
              className="group glass rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/10"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-lg bg-sky-500/10 p-2 text-sky-600 transition group-hover:scale-110 dark:text-sky-300">
                  <Icon size={18} />
                </span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center justify-between gap-2 text-sm">
                    <span className="text-slate-600 dark:text-slate-300">{skill.name}</span>
                    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${levelStyles[skill.level]}`}>
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
