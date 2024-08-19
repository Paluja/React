/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    function login(user){
        if(user.email === "fra@gmail.com" && user.password === "123456"){
            setAuth(user);
            setErrorMessage("")
        }else {
            setErrorMessage("Invalid email or password")
        }
    }

    function logout(){
        setAuth(null);
    }

    const value= {
        auth,
        login,
        logout,
        errorMessage,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}