import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";

const LangContext = createContext({
    lang: "en",
    toggleLang: () => {}
});


export const useLangContext = () => {
    return useContext(LangContext);
}

export const LangProvider = ({ children }) => {
    const [lang, setLang] = useState(true);

    const toggleLang = () =>{
        (lang === true) ? setLang(false) : setLang(true);
    }

    return(
        <LangContext.Provider value={{lang, toggleLang}}>
            {children}
        </LangContext.Provider>
    )
}
