import { useState } from 'react'

import './App.css'
import AdavancedForms from './components/AdvanceForms/AdavancedForms'
import BasicForms from './components/BasicForms/BasicForms'

function App() {
  const [view, setView] = useState("basic")

  return (
    <div className="App">
      <nav>
        <h3 onClick={()=>setView("basic")} 
        style={{color:view === "basic" ? "#fff":""}}>
          Basic Form</h3>
        <h3 onClick={()=>setView("advanced")} 
        style={{color:view === "advanced" ? "#fff":""}}>
          Advanced Form</h3>
      </nav>
      {view === "basic" ? <BasicForms/> : <AdavancedForms/>}
    </div>
  )
}

export default App
