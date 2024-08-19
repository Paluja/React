import { Suspense } from "react"
import Profile from "./Profile"

function ProfileWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Profile/>
    </Suspense>
  )
}

export default ProfileWrapper