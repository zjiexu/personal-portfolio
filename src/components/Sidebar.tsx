type SidebarProps = {
  activeSection: string
  onNavigate: (title: string) => void
}

function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  return (
    <aside className="site-sidebar">
      <div>
        <a className="site-name" href="#top" onClick={() => onNavigate('Home')}>
          Zhijie Xu
        </a>

        <p className="sidebar-role">Software Developer</p>
      </div>

      <nav className="site-nav" aria-label="Main navigation">
        <a
          className={activeSection === 'Home' ? 'active' : ''}
          href="#top"
          onClick={() => onNavigate('Home')}
        >
          Home
        </a>
        <a
          className={activeSection === 'About' ? 'active' : ''}
          href="#about"
          onClick={() => onNavigate('About')}
        >
          About
        </a>
        <a
          className={activeSection === 'Projects' ? 'active' : ''}
          href="#projects"
          onClick={() => onNavigate('Projects')}
        >
          Projects
        </a>
        <a
          className={activeSection === 'Skills' ? 'active' : ''}
          href="#skills"
          onClick={() => onNavigate('Skills')}
        >
          Skills
        </a>
        <a
          className={activeSection === 'Contact' ? 'active' : ''}
          href="#contact"
          onClick={() => onNavigate('Contact')}
        >
          Contact
        </a>
      </nav>

      <p className="sidebar-note">Personal Portfolio</p>
    </aside>
  )
}

export default Sidebar
