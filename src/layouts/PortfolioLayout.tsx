import { Outlet } from 'react-router-dom'
import PortfolioSidebar from '../components/PortfolioSidebar'

function PortfolioLayout() {
  return (
    <main className="portfolio-shell">
      <PortfolioSidebar />

      <section className="portfolio-content">
        <Outlet />
      </section>
    </main>
  )
}

export default PortfolioLayout
