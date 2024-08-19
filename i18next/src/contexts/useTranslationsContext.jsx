import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

const TranslationsContext = createContext();

export const useTranslationsContext = () => {
    return useContext(TranslationsContext);
};

export const TranslationsProvider = ({ children }) => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language);

    const changeLanguage = () =>{
        const newLang = language === "es" ? "en" : "es";
        i18n.changeLanguage(newLang);
        setLanguage(newLang);
    }

    return (
        <TranslationsContext.Provider value={{ language, changeLanguage }}>
            {children}
        </TranslationsContext.Provider>
    );
};
