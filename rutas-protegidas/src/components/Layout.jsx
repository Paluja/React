import { Link, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext"

function Layout() {
    const { auth, logout } = useAuthContext();
  return (
    <div>
        <nav>
            <h1>Rutas Portegidas</h1>
            {auth && (
                <>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="about">About</Link>
                    </li>
                    <button onClick={logout}>Logout</button>
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