import { profile } from '../profile'
import CopyrightNotice from '../components/CopyrightNotice'
import ProfileAvatar from '../components/ProfileAvatar'
import SocialLinks from '../components/SocialLinks'

function LandingPage() {
  return (
    <main className="landing-page">
      <section className="landing-content" aria-label="Portfolio introduction">
        <ProfileAvatar />

        <h1>{profile.name}</h1>

        <p className="landing-location">{profile.location}</p>

        <h2>{profile.role}</h2>

        <p className="landing-description">{profile.description}</p>

        <button className="landing-button" type="button" disabled>
          Portfolio Coming Soon
        </button>
      </section>

      <footer className="landing-footer">
        <SocialLinks />
        <CopyrightNotice />
      </footer>
    </main>
  )
}

export default LandingPage
