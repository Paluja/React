import { createContext, useContext, useState } from "react";

const BasketContext = createContext({});

export  const useBasketContext = () => {
    return useContext(BasketContext);
}

export const BasketProvider = ({children}) => {
    const [basket, setBasket] = useState([]);

    function delProduct (product){
        const index = basket.findIndex(
            (p) => product.id === p.id
        )
        basket.splice(index,1);
        setBasket([...basket]);
    }
    

    const value = {
        basket,
        setBasket,
        delProduct
    }

    return(
        <BasketContext.Provider value={value}>
            {children}
        </BasketContext.Provider>
    )
}