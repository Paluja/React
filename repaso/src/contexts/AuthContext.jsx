/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext)
}

export default function AuthContextProvider({children}){
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    
    function login(email){
        setUser({email})
        navigate('/dashboard')
    }

    function logout(){
        setUser(null)
        navigate('/login')
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>{children}</AuthContext.Provider>
    )
}