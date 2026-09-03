import SectionHeading from './SectionHeading'

const interests = ['Data Analytics', 'Data Science', 'Machine Learning', 'Business Intelligence', 'Cloud Computing', 'AI']

const CareerGoals = () => (
  <section id="goals" className="section-shell">
    <SectionHeading eyebrow="Future Focus" title="Where I'm Headed" />
    <div className="glass rounded-2xl p-6">
      <p className="text-slate-600 dark:text-slate-300">
        My goal is to develop into a well-rounded data professional capable of combining analytical
        thinking, programming, statistics and technology to solve real-world problems.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {interests.map((interest) => (
          <span
            key={interest}
            className="rounded-full bg-slate-200/80 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            {interest}
          </span>
        ))}
      </div>
    </div>
  </section>
)

export default CareerGoals
