import { useEffect } from 'react'
import LandingPage from './components/LandingPage'
import './App.css'

function App() {
  useEffect(() => {
    document.title = 'Portfolio | Portfolio'
  }, [])

  return <LandingPage />
}

export default App
