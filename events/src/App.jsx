
import './App.css'
import UserProfile from './components/UserProfile'


function App() {
  const user = { 
    name: 'Agapito',
    age: 41,
    location: 'Ribadabia'
  }

  return (
    <>
      <UserProfile name={user.name} age={user.age} location={user.location}/>
    </>
  )
}

export default App
