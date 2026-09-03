import { motion, useReducedMotion } from 'framer-motion'
import { offerCards } from '../data/skills'
import SectionHeading from './SectionHeading'

const WhatICanOffer = () => {
  const reducedMotion = useReducedMotion()

  return (
    <section id="offer" className="section-shell">
      <SectionHeading eyebrow="For Employers" title="What I Can Bring to Your Team" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {offerCards.map((card, index) => {
          const Icon = card.icon
          return (
            <motion.article
              key={card.title}
              initial={reducedMotion ? false : { opacity: 0, y: 14 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.07 }}
              className="glass rounded-2xl p-5"
            >
              <span className="mb-3 inline-flex rounded-lg bg-indigo-500/10 p-2 text-indigo-600 dark:text-indigo-300">
                <Icon size={18} />
              </span>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{card.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{card.description}</p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

export default WhatICanOffer
