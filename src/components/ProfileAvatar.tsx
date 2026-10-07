import { profile } from '../profile'

function ProfileAvatar() {
  return (
    <div className="profile-avatar" aria-label="Profile photo placeholder">
      {profile.initials}
    </div>
  )
}

export default ProfileAvatar
