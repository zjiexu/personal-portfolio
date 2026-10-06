import { useEffect, useState } from 'react'
import LandingPage from './components/LandingPage'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import IntroSection from './components/IntroSection'
import LearningSection from './components/LearningSection'
import PageBanner from './components/PageBanner'
import ProjectsSection from './components/ProjectsSection'
import Sidebar from './components/Sidebar'
import { contactLinks, learningAreas, projects } from './data'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'portfolio'>('landing')

  useEffect(() => {
    document.title =
      currentPage === 'landing' ? 'Portfolio | Portfolio' : 'Home | Portfolio'
  }, [currentPage])

  if (currentPage === 'landing') {
    return <LandingPage onViewPortfolio={() => setCurrentPage('portfolio')} />
  }

  return (
    <main className="site-shell" id="top">
      <Sidebar />

      <div className="page-content">
        <PageBanner />
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
