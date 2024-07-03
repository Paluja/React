import {useState} from 'react'
import LightBody from './LightBody';
import DarkBody from './DarkBody';

function BodyColor() {
    const [dark,setDarkMode] = useState(true);
    const themeStyle = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black"
    }
    const toggleTheme = () => {
        setDarkMode(!dark)
    }
    return (
        <div style={themeStyle}>
            <h1>Cambiar {!dark ? "light" : "dark"} mode</h1>
            <button onClick= {toggleTheme}>Cambiar</button>
            {/* {dark ? <LightBody/> : <DarkBody/>} */}

        </div>
  )
}

export default BodyColor