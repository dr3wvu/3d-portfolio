import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />

      <Hero />
      <About />
      <Portfolio />
      <Resume />
      {/* <Skills /> */}
      <Contact />
    </div>
  )
}
