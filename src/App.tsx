import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import IntroSection from './components/IntroSection'
import LearningSection from './components/LearningSection'
import ProjectsSection from './components/ProjectsSection'
import Sidebar from './components/Sidebar'
import { contactLinks, learningAreas, projects } from './data'
import './App.css'

function App() {
  return (
    <main className="site-shell" id="top">
      <Sidebar />

      <div className="page-content">
        <IntroSection />
        <AboutSection />
        <ProjectsSection projects={projects} />
        <LearningSection areas={learningAreas} />
        <ContactSection links={contactLinks} />
        <Footer />
      </div>
    </main>
  )
}

export default App
