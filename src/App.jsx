import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Courses from './components/Courses'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [dark, setDark] = useState(true)
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <div className="bg-gray-950 text-gray-100 selection:bg-cyan-500/20">
      <Navbar toggleDark={() => setDark(d => !d)} dark={dark} />
      <main className="pt-16">
        <Hero />
        <About />
        <Courses />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}