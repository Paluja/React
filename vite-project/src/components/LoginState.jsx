import {useState} from 'react'

function LoginState() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    function handleUsernameChange(e) {
        setUsername(e.target.value);
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        const user = {
            name: username,
            password: password
        }
        if (user.name === "Paluja" && user.password === "klklk"){
            alert('Usuario Correcto')
        } else {
            alert('Usuario Incorrecto')
        }
        console.log(user);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleUsernameChange} placeholder='Username'/>
            <input type="password" onChange={handlePasswordChange} placeholder='Password'/>
            <button type='submit'>Enviar Formulario</button>
        </form>
    )
}

export default LoginState