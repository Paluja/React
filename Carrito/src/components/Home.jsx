import { useBasketContext } from '../contexts/UseBasketContext'
const products = [
    {
        id: 1,
        name: 'Tecado Switches Cherry MX Red',
        price: 80
    },
    {
        id: 2,
        name: 'Teclado Switches Cherry MX Blue',
        price: 75
    },
    {
        id: 3,
        name: 'Teclado Switches Cherry MX Brown',
        price: 100
    },
    {
        id: 4,
        name: 'Teclado Switches Cherry MX Black',
        price: 99
    },
    {
        id: 5,
        name: 'Teclado Switches Cherry MX Speed Silver',
        price: 120
    },
    {
        id: 6,
        name: 'Teclado Switches Cherry MX Silent Red',
        price: 130
    },
    {
        id: 7,
        name: 'Teclado Switches Cherry MX Silent Black',
    }
]


function Home() {
    const {basket, setBasket} = useBasketContext();
    console.log(products)
    return (
        <div className="products-container">
            <h1>Productos</h1>
            <div className=' grid grid-cols-3 grid-rows-3 gap-2'>
                {products.map((product) => (
                    <div key={product.id} className="flex flex-col items-center bg-slate-300 rounded-lg">
                        <img className='rounded-t-lg' src="https://cdn.thewirecutter.com/wp-content/media/2024/04/mechanicalkeyboards-2048px-1361.jpg?auto=webp&quality=75&width=1024" alt="" />
                        <div className='prod-description flex flex-col items-start my-4 font-bold'>
                            <h3>{product.name}</h3>
                            <p className='my-2'>{product.price}</p>
                            <button className='box-content p-4 m-auto bg-sky-500 rounded-lg hover:bg-sky-400 transition duration-300' onClick={() => setBasket([...basket, product])}>Agregar al carrito</button>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Home