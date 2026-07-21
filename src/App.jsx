/**
 * App — root component.
 * Assembles all sections in page order:
 * Navbar → Hero → TechStack → Experience → Projects → Footer
 */
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App
