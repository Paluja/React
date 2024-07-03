import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";

const ThemeContext = createContext({
    theme: "light",
    toggleTheme: () => {}
});

export const useThemeContext = () => {
    return useContext(ThemeContext);
}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    
    const toggleTheme = () => {
        setTheme(
            (currentTheme) => (currentTheme === "light" ? "dark" : "light")
        );
        
    }
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};