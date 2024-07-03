export default function Estilo() {
    const frase = "lorem ipsum dolor sit amet";
    const style = {
        color: "brown",
        fontSize: 22
    }
    return(
        <div>
        <p style = {{color :"red", fontSize: 18}}>
            {frase}
        </p>
        
        <p style = {style}>
            {frase}
        </p>
        </div>
    )
}