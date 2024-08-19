import { Suspense } from 'react'
import Home  from './Home'

function HomeWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Home/>
    </Suspense>
  )
}

export default HomeWrapper