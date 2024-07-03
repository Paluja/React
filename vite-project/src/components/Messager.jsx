import {useState} from 'react'

function Messager() {
    const [message, setMessage] = useState('');
    const changeMesaage = (e) => {
        setMessage(e.target.value);
    }    
    return (
    <div>
        <h3>Hooks and Events</h3>
        <input type="text" onChange={changeMesaage} placeholder='Mensaje mensaje' />
        <p>{message}</p>
    </div>
  )
}

export default Messager