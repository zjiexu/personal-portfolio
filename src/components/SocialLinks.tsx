import { socialLinks } from '../profile'

function SocialLinks() {
  return (
    <nav className="social-links" aria-label="Social links">
      {socialLinks.map((link) => (
        <a
          href={link.url}
          key={link.label}
          target={link.url.startsWith('http') ? '_blank' : undefined}
          rel={link.url.startsWith('http') ? 'noreferrer' : undefined}
        >
          {link.label}
        </a>
      ))}
    </nav>
  )
}

export default SocialLinks
