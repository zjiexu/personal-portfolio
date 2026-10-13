import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import CopyrightNotice from './CopyrightNotice'
import ProfileAvatar from './ProfileAvatar'
import SocialLinks from './SocialLinks'
import { profile } from '../profile'

const navLinks = [
  { label: 'Home', to: '/home' },
  { label: 'Skills and Experience', to: '/skills' },
  { label: 'Personal Projects', to: '/projects' },
  { label: 'Tech Blog', to: '/blog' },
]

type PortfolioNavLinksProps = {
  onNavigate?: () => void
}

function PortfolioNavLinks({ onNavigate }: PortfolioNavLinksProps) {
  return (
    <>
      {navLinks.map((navLink) => (
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          key={navLink.to}
          onClick={onNavigate}
          to={navLink.to}
        >
          {navLink.label}
        </NavLink>
      ))}
    </>
  )
}

function PortfolioSidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="portfolio-mobile-header">
        <Link className="portfolio-mobile-brand" to="/">
          <ProfileAvatar />
          <span>Portfolio | {profile.name}</span>
        </Link>

        <nav className="portfolio-top-nav" aria-label="Portfolio navigation">
          <PortfolioNavLinks />
        </nav>

        <button
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="portfolio-menu-button"
          type="button"
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className={isMenuOpen ? 'portfolio-mobile-menu open' : 'portfolio-mobile-menu'}>
        <nav className="portfolio-nav" aria-label="Portfolio navigation">
          <PortfolioNavLinks onNavigate={() => setIsMenuOpen(false)} />
        </nav>
      </div>

      <aside className="portfolio-sidebar">
        <div className="portfolio-sidebar-profile">
          <Link className="profile-avatar-link" to="/" aria-label="Back to landing page">
            <ProfileAvatar />
          </Link>

          <h1>{profile.name}</h1>
          <p>{profile.location}</p>
          <h2>{profile.role}</h2>
        </div>

        <nav className="portfolio-nav" aria-label="Portfolio navigation">
          <PortfolioNavLinks />
        </nav>

        <div className="portfolio-sidebar-footer">
          <SocialLinks />
          <CopyrightNotice />
        </div>
      </aside>
    </>
  )
}

export default PortfolioSidebar
