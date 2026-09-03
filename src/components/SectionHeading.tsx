interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
}

const SectionHeading = ({ eyebrow, title, description }: SectionHeadingProps) => (
  <div className="mb-10 max-w-3xl">
    {eyebrow ? (
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-sky-600 dark:text-sky-300">
        {eyebrow}
      </p>
    ) : null}
    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">{title}</h2>
    {description ? <p className="mt-3 text-slate-600 dark:text-slate-300">{description}</p> : null}
  </div>
)

export default SectionHeading
