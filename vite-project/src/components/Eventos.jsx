import React from 'react'

function Eventos() {
    function eventoAlerta(event){
        alert("Evento clicado");
        console.log(`Boton pulsado: ${event.target.innerText}`);
    }

    function eventoAlertaNombre(event,name){
        alert(`Hola ${name}`);
    }
  
    return (
        <div>
            <button onClick = {eventoAlerta}>Lanza alerts</button>
            <button onClick = {(e) => eventoAlertaNombre(e,"Pepe")}>Lanzar alerta con nomrbe</button> {/* a una funcion evento asi se le pasa el event */}
            
        </div>
    )
}

export default Eventos