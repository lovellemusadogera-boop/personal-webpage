import { BarChart3, Binary, BookOpenCheck, Braces, Cloud, Database, Wrench } from 'lucide-react'

export type SkillLevel = 'Learning' | 'Familiar' | 'Intermediate'

export interface SkillCategory {
  id: string
  title: string
  icon: typeof Database
  skills: Array<{ name: string; level: SkillLevel }>
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    icon: Braces,
    skills: [
      { name: 'Python', level: 'Intermediate' },
      { name: 'C', level: 'Familiar' },
      { name: 'SQL', level: 'Intermediate' },
    ],
  },
  {
    id: 'data-science',
    title: 'Data Science',
    icon: BarChart3,
    skills: [
      { name: 'Pandas', level: 'Familiar' },
      { name: 'NumPy', level: 'Familiar' },
      { name: 'Matplotlib', level: 'Familiar' },
      { name: 'Scikit-learn', level: 'Learning' },
      { name: 'Data Analysis', level: 'Intermediate' },
      { name: 'Data Visualization', level: 'Familiar' },
      { name: 'Statistics', level: 'Familiar' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: Database,
    skills: [
      { name: 'MySQL', level: 'Familiar' },
      { name: 'MariaDB', level: 'Familiar' },
      { name: 'SQLite', level: 'Intermediate' },
      { name: 'Database Design', level: 'Familiar' },
    ],
  },
  {
    id: 'development',
    title: 'Development',
    icon: Binary,
    skills: [
      { name: 'HTML', level: 'Intermediate' },
      { name: 'CSS', level: 'Familiar' },
      { name: 'JavaScript', level: 'Familiar' },
      { name: 'React Fundamentals', level: 'Learning' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: Wrench,
    skills: [
      { name: 'Jupyter Notebook', level: 'Intermediate' },
      { name: 'Google Colab', level: 'Intermediate' },
      { name: 'Anaconda', level: 'Familiar' },
      { name: 'Git', level: 'Familiar' },
      { name: 'VS Code', level: 'Intermediate' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & Technology',
    icon: Cloud,
    skills: [
      { name: 'AWS Fundamentals', level: 'Learning' },
      { name: 'Azure Fundamentals', level: 'Learning' },
      { name: 'Google Cloud Fundamentals', level: 'Learning' },
      { name: 'Cloud Storage', level: 'Familiar' },
      { name: 'Distributed Systems Fundamentals', level: 'Learning' },
    ],
  },
]

export const levelStyles: Record<SkillLevel, string> = {
  Learning: 'bg-amber-500/15 text-amber-600 dark:text-amber-300',
  Familiar: 'bg-sky-500/15 text-sky-700 dark:text-sky-300',
  Intermediate: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300',
}

export const sectionHighlights = [
  'Data analysis',
  'Python programming',
  'Statistics',
  'Database design',
  'Data visualization',
  'Algorithms & data structures',
  'Cloud computing',
  'Machine learning fundamentals',
]

export const coursework = [
  'Data Structures and Algorithms',
  'Database Design',
  'Procedural Programming',
  'Statistical Analysis',
  'Data Visualization',
  'Big Data Analytics',
  'Cloud Computing and Storage',
]

export const offerCards = [
  {
    title: 'Analytical Thinking',
    description: 'Ability to examine data and identify useful patterns and insights.',
    icon: BarChart3,
  },
  {
    title: 'Problem Solving',
    description: 'I enjoy breaking complex problems into manageable solutions.',
    icon: BookOpenCheck,
  },
  {
    title: 'Technical Foundation',
    description:
      'Experience developing academic projects using Python, SQL, databases and analytical tools.',
    icon: Binary,
  },
  {
    title: 'Continuous Learning',
    description:
      'Strong interest in developing practical industry skills and learning new technologies.',
    icon: Wrench,
  },
  {
    title: 'Team Contribution',
    description:
      'Ready to collaborate, communicate ideas and contribute to real-world projects.',
    icon: Cloud,
  },
]
