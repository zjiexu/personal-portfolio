import { Link, NavLink } from 'react-router-dom'
import CopyrightNotice from './CopyrightNotice'
import ProfileAvatar from './ProfileAvatar'
import SocialLinks from './SocialLinks'
import { profile } from '../profile'

function PortfolioSidebar() {
  return (
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
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          to="/skills"
        >
          Skills and Experience
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          to="/projects"
        >
          Personal Projects
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          to="/blog"
        >
          Tech Blog
        </NavLink>
      </nav>

      <div className="portfolio-sidebar-footer">
        <SocialLinks />
        <CopyrightNotice />
      </div>
    </aside>
  )
}

export default PortfolioSidebar
