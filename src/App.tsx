import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import PortfolioLayout from './layouts/PortfolioLayout'
import BlogPage from './pages/BlogPage'
import LandingPage from './pages/LandingPage'
import PortfolioHome from './pages/PortfolioHome'
import ProjectsPage from './pages/ProjectsPage'
import SkillsPage from './pages/SkillsPage'
import './App.css'

const pageTitles: Record<string, string> = {
  '/': 'Portfolio',
  '/home': 'Home',
  '/skills': 'Skills',
  '/projects': 'Projects',
  '/blog': 'Blog',
}

function App() {
  const location = useLocation()

  useEffect(() => {
    const pageTitle = pageTitles[location.pathname] ?? 'Portfolio'

    document.title = `${pageTitle} | Portfolio`
  }, [location.pathname])

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route element={<PortfolioLayout />}>
        <Route path="/home" element={<PortfolioHome />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Route>
    </Routes>
  )
}

export default App
