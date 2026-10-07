import { useEffect } from 'react'
import LandingPage from './pages/LandingPage'
import './App.css'

function App() {
  useEffect(() => {
    document.title = 'Portfolio | Portfolio'
  }, [])

  return <LandingPage />
}

export default App
