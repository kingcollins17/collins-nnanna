import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import StarField from './components/StarField'

function App() {
  return (
    <div className="bg-[#fbfbfd] text-zinc-800 min-h-screen overflow-x-hidden relative">
      <StarField />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
