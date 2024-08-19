import { createContext, useContext, useEffect, useState } from "react";

const FilmContext = createContext({});

export const useFilmContext = () => {
    return useContext(FilmContext);
}


export const FilmProvider = ({ children }) =>{
    const [film, setFilm] = useState("");
    const [dataFilm,setDataFilm] = useState({});

    const fetchFilm = (film) =>{
        try {
            fetch(`http://www.omdbapi.com/?apikey=d5ad5a11&t=${film}`)
                .then((response)=>response.json())
                    .then((data) => setDataFilm(data))
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        fetchFilm(film)
        console.log(dataFilm);
    },[film])
    
    const value = {
        setFilm,
        dataFilm
    }

    return (
        <FilmContext.Provider value={value}>
            {children}
        </FilmContext.Provider>
    )

}