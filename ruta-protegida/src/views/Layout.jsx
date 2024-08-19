import React from 'react';
import { Link, Outlet } from "react-router-dom";
import { useAuthContext } from '../context/AuthContext';

function Layout() {
    const { auth, logout } = useAuthContext();
  
    return (
    <div>
        <nav>
            <h1>Rutas peliculas protegidas</h1>
            {auth && (
                <>
                    <ul>
                        <li>
                            <Link to ="/">Home</Link>
                        </li>
                        <li>
                            <Link to ="peliculas">Lista de peliculas</Link>
                        </li>
                        <button onClick={logout}> Logout </button>
                    </ul>
                </>
            )}
        </nav>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout