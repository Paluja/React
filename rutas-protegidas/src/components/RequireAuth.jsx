import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext"


function RequireAuth() {
    const {auth} = useAuthContext();
    
  return auth ? <Outlet/> : <Navigate to="/login" />;

}

export default RequireAuth