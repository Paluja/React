import { Suspense } from 'react'
import About from './About'

function AboutWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <About/>
    </Suspense>
  )
}

export default AboutWrapper