import { BarChart4, Car, DatabaseZap, Hospital } from 'lucide-react'

export interface Project {
  id: string
  title: string
  subtitle: string
  status: 'Academic Project' | 'In Development'
  description: string
  technologies: string[]
  problem: string
  solution: string
  features: string[]
  dataStructures: string[]
  results: string
  lessons: string
  icon: typeof BarChart4
  githubUrl: string
  demoUrl: string
}

export const projects: Project[] = [
  {
    id: 'student-analysis',
    title: 'Student Data Analysis',
    subtitle: 'Academic Project',
    status: 'In Development',
    description:
      'Explores student performance trends using Python-based analysis and visualization techniques.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
    problem: 'Need to identify patterns that influence student outcomes in coursework datasets.',
    solution:
      'Build a clean analysis workflow for importing, cleaning, visualizing, and interpreting academic records.',
    features: ['Data cleaning pipeline', 'Summary statistics', 'Visual trend exploration'],
    dataStructures: ['DataFrames', 'Arrays', 'Dictionaries'],
    results: 'Results to be updated once the project is finalized.',
    lessons: 'Improved workflow design and confidence in exploratory data analysis.',
    icon: BarChart4,
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    id: 'library-system',
    title: 'Library Management System',
    subtitle: 'Academic Project',
    status: 'In Development',
    description:
      'Database-driven system concept for tracking books, borrowers, and lending records.',
    technologies: ['SQL', 'MySQL', 'C', 'Database Design'],
    problem:
      'Manual library processes are slow and error-prone when searching, issuing, and returning books.',
    solution:
      'Design a structured database and core logic to manage catalog data and borrower activity.',
    features: ['Catalog records', 'Borrow/return tracking', 'Basic search and reporting'],
    dataStructures: ['Relational tables', 'Indexed records', 'Linked lists (course exercise)'],
    results: 'Pending implementation milestones and validation tests.',
    lessons: 'Strengthened database normalization and data consistency practices.',
    icon: DatabaseZap,
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    id: 'clinic-system',
    title: 'School Clinic Management System',
    subtitle: 'Academic Project',
    status: 'In Development',
    description:
      'Information management concept for clinic visits, records, and patient service workflows.',
    technologies: ['SQL', 'SQLite', 'C', 'Algorithms'],
    problem:
      'School clinics need a reliable way to track visit logs and basic treatment information.',
    solution:
      'Plan and prototype a records workflow with efficient storage and retrieval operations.',
    features: ['Visit logging', 'Record search', 'Structured data entry flow'],
    dataStructures: ['Queues', 'Stacks', 'Relational records'],
    results: 'Detailed outcomes will be published after deployment-ready iteration.',
    lessons: 'Learned to model real-world workflows into reliable data structures.',
    icon: Hospital,
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    id: 'car-analysis',
    title: 'Car Data Analysis',
    subtitle: 'Academic Project',
    status: 'In Development',
    description:
      'Statistical analysis of vehicle price, weight, fuel use, and related attributes.',
    technologies: ['Python', 'NumPy', 'Matplotlib', 'Statistics'],
    problem:
      'Vehicle datasets contain many variables and require clear methods for extracting insight.',
    solution:
      'Perform exploratory analysis with statistical summaries and visual comparisons.',
    features: ['Correlation checks', 'Comparative charts', 'Metric summary dashboard'],
    dataStructures: ['DataFrames', 'Arrays'],
    results: 'Project insights will be documented once analysis is complete.',
    lessons: 'Gained better intuition for feature relationships and visualization clarity.',
    icon: Car,
    githubUrl: '#',
    demoUrl: '#',
  },
]
