import { createContext, useContext, useState } from "react";



export const CountContext = createContext({
    count: 0,
    setCount: () => {}
});

export const useCountContext = () => {
    return useContext(CountContext);
};


export const CountProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    return (
        <CountContext.Provider value={{ count, setCount }}>
            {children}
        </CountContext.Provider>
    );
}
