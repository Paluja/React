import { useState } from "react";

function ToggleText() {
    const [text,setText] = useState(true);
    
    const styleHidden = {
        display: !text ? "none" : "block"
    }
    
    const hiddeText = () => {
        setText(!text)
    }

    return (
        <div>
            <h2 style={styleHidden}>ToggleText</h2>
            <button onClick={hiddeText}>{!text ? "Mostrar" : "Ocultar"} texto</button>
        </div>
  )
}

export default ToggleText