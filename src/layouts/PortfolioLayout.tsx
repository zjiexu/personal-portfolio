import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import PortfolioSidebar from '../components/PortfolioSidebar'

function PortfolioLayout() {
  const location = useLocation()
  const contentRef = useRef<HTMLElement>(null)

  useEffect(() => {
    contentRef.current?.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    })
  }, [location.pathname])

  return (
    <main className="portfolio-shell">
      <PortfolioSidebar />

      <section className="portfolio-content" ref={contentRef}>
        <Outlet />
      </section>
    </main>
  )
}

export default PortfolioLayout
