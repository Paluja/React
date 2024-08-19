import { Link } from 'react-router-dom'
import { useBasketContext } from '../contexts/UseBasketContext';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
    const [count, setCount] = useState(0);
    const {basket} = useBasketContext();
    
    useEffect(()=>{
        setCount(basket.length);
    },[basket])
    
    return (
        <>
            <nav className='flex flex-row justify-between bg-gray-300 p-10 rounded-lg'>
                <Link to="/"><p className='bg-red-700'>Productos</p></Link>
                <Link to="/basket">
                    <div className="basket-logo">
                        🛒
                        <span className='basket-counter'>{count}</span>
                    </div>
                </Link>
            </nav>
            <Outlet/>
        </>
  )
}

export default Layout