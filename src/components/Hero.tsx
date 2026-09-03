import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  x: `${Math.random() * 100}%`,
  y: `${Math.random() * 100}%`,
  delay: Math.random() * 2,
}))

const Hero = () => {
  const reducedMotion = useReducedMotion()
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  return (
    <section id="home" className="relative overflow-hidden section-shell pt-24 sm:pt-28">
      <div className="absolute inset-0 -z-20 grid-bg" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        animate={
          reducedMotion
            ? undefined
            : {
                backgroundPosition: ['0% 0%', '100% 100%'],
              }
        }
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, repeatType: 'reverse' }}
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(14,165,233,0.18), transparent 45%), radial-gradient(circle at 75% 35%, rgba(99,102,241,0.15), transparent 40%)',
        }}
      />

      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 10 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/35 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> Open to Industrial Attachment
            Opportunities
          </motion.p>
          <motion.h1
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl font-black leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            <span className="bg-gradient-to-r from-sky-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
              Turning Data Into Insight.
            </span>{' '}
            Building Solutions With Technology.
          </motion.h1>
          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300"
          >
            I'm Lovelle K Musadogera, a Diploma in Data Science student passionate about data analysis,
            programming, databases, visualization, and building practical technology solutions.
          </motion.p>
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-sky-500/30 transition hover:translate-y-[-2px] hover:bg-sky-500"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-slate-300 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:translate-y-[-2px] hover:border-sky-500 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-100"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="glass relative overflow-hidden rounded-3xl p-6"
          aria-label="Data science visual"
          onMouseMove={(event) => {
            if (reducedMotion) return
            const rect = event.currentTarget.getBoundingClientRect()
            const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8
            const y = ((event.clientY - rect.top) / rect.height - 0.5) * -8
            setTilt({ x, y })
          }}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          style={{ transform: `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` }}
        >
          <div className="mb-4 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-300">
              Data Activity
            </p>
            <p className="text-xs text-emerald-600 dark:text-emerald-300">Live Insight</p>
          </div>
          <div className="space-y-4">
            {[65, 82, 73, 91].map((value, index) => (
              <div key={value} className="space-y-2">
                <div className="flex justify-between text-xs text-slate-500 dark:text-slate-300">
                  <span>Signal {index + 1}</span>
                  <span>{value}%</span>
                </div>
                <motion.div
                  className="h-2 rounded-full bg-slate-200/80 dark:bg-slate-800"
                  initial={reducedMotion ? false : { opacity: 0 }}
                  animate={reducedMotion ? undefined : { opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-sky-500 to-indigo-500"
                    initial={reducedMotion ? false : { width: 0 }}
                    animate={reducedMotion ? undefined : { width: `${value}%` }}
                    transition={{ delay: 0.4 + index * 0.08, duration: 1 }}
                  />
                </motion.div>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-0">
            {particles.map((particle) => (
              <motion.span
                key={particle.id}
                className="absolute h-1.5 w-1.5 rounded-full bg-sky-400/60"
                style={{ left: particle.x, top: particle.y }}
                animate={
                  reducedMotion
                    ? undefined
                    : {
                        y: [0, -8, 0],
                        opacity: [0.3, 1, 0.3],
                      }
                }
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: particle.delay }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
