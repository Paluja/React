export default function Map(){
    const listaCompra = ["Pan", "Leche", "Huevos", "Azúcar", "Café"];
    const personas = [
        {nombre: "Abraham", edad: 25, id:1},
        {nombre: "Juan", edad: 30, id:2},
        {nombre: "María", edad: 20, id:3},
        {nombre: "Luis", edad: 35, id:4}
    ];
    return (
        <div>
            <h1>Mi lista de la compra</h1>
            <ol>
                {/* {listaCompra.map(item => <li>{item}</li>)} */}
                {listaCompra.map(item => <li key = {0}>{item}</li>)}
            </ol>

            {personas.map((item)=>{
                return (
                    <ol key ={item.id}>
                        <li>{item.id}</li>
                        <li>{item.nombre}</li>
                        <li>{item.edad}</li>
                    </ol>
                )
            })}
        </div>
    )
}