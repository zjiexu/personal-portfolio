function Sidebar() {
  return (
    <aside className="site-sidebar">
      <div>
        <a className="site-name" href="#top">
          Zhijie Xu
        </a>

        <p className="sidebar-role">Software Developer</p>
      </div>

      <nav className="site-nav" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>

      <p className="sidebar-note">Personal Portfolio</p>
    </aside>
  )
}

export default Sidebar
