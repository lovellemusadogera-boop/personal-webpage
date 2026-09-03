import About from './components/About'
import CareerGoals from './components/CareerGoals'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Toolkit from './components/Toolkit'
import WhatICanOffer from './components/WhatICanOffer'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Toolkit />
        <WhatICanOffer />
        <CareerGoals />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
