import { ExternalLink, FolderGit2, Github, X } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { projects, type Project } from '../data/projects'
import SectionHeading from './SectionHeading'

const Projects = () => {
  const reducedMotion = useReducedMotion()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Portfolio"
        title="Projects"
        description="Project cards are placeholders for active academic work and can be updated as details become available."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => {
          const Icon = project.icon
          return (
            <motion.article
              key={project.id}
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
              className="group glass relative overflow-hidden rounded-2xl p-5"
            >
              <div className="absolute right-3 top-3 rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-700 dark:text-amber-300">
                {project.status}
              </div>
              <span className="inline-flex rounded-lg bg-sky-500/12 p-2 text-sky-600 dark:text-sky-300">
                <Icon size={18} />
              </span>
              <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
              <p className="mt-1 text-sm font-medium text-indigo-600 dark:text-indigo-300">{project.subtitle}</p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-300">
                Tech Stack
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-200/70 px-2.5 py-1 text-xs text-slate-700 transition group-hover:bg-sky-500/15 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-700 dark:bg-sky-600 dark:hover:bg-sky-500"
              >
                View Project Details <ExternalLink size={16} />
              </button>
            </motion.article>
          )
        })}
      </div>

      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4"
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={reducedMotion ? undefined : { opacity: 1 }}
            exit={reducedMotion ? undefined : { opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <motion.div
              initial={reducedMotion ? false : { scale: 0.98, y: 10 }}
              animate={reducedMotion ? undefined : { scale: 1, y: 0 }}
              exit={reducedMotion ? undefined : { scale: 0.98, y: 10 }}
              className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 dark:bg-slate-900"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-300">
                    {selectedProject.status}
                  </p>
                  <h3 id="project-modal-title" className="text-2xl font-bold text-slate-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                  aria-label="Close project details"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <p>
                  <strong className="text-slate-900 dark:text-white">Problem:</strong> {selectedProject.problem}
                </p>
                <p>
                  <strong className="text-slate-900 dark:text-white">Solution:</strong> {selectedProject.solution}
                </p>
                <p>
                  <strong className="text-slate-900 dark:text-white">Results:</strong> {selectedProject.results}
                </p>
                <p>
                  <strong className="text-slate-900 dark:text-white">Lessons learned:</strong>{' '}
                  {selectedProject.lessons}
                </p>
                <div>
                  <p className="mb-2 font-semibold text-slate-900 dark:text-white">Key Features</p>
                  <ul className="list-inside list-disc space-y-1">
                    {selectedProject.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-2 font-semibold text-slate-900 dark:text-white">Data Structures / Algorithms</p>
                  <ul className="list-inside list-disc space-y-1">
                    {selectedProject.dataStructures.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={selectedProject.githubUrl}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 hover:border-sky-500 dark:border-slate-700 dark:text-slate-100"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href={selectedProject.demoUrl}
                  className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500"
                >
                  <FolderGit2 size={16} /> Live Demo
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}

export default Projects
