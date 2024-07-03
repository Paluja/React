import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

// function CharactersIndex() {
//     const [characters, setCharacters] = useState([])
//     const {page} = useParams();
//     const btnPages = [];
//     const [pagina,setPagina] = useState(0);

//     console.log("Pagina pulsada ---->"+pagina)
//     useEffect(()=>{
//         async function fetchData(){
//             const response = await fetch("https://rickandmortyapi.com/api/character/?page="+pagina);
//             const json = await response.json();
//             console.log("response"+response);
//             console.log("json"+json);
//             setCharacters(json.results);
//         }
//         fetchData();
//     },[pagina])

    
//     for (let i = 1; i <= 42 ; i++) {
//         btnPages[i] = i
//     }
    
//     if (!characters){
//         return(
//             <p>Cargando...</p>
//         )
//     }
//     return (
//         <>
//         <ul className='btnPages-container'>
//             {btnPages.map((btnPage)=>(
//                 <li key={btnPage} onClick={()=>setPagina(btnPage)}>{btnPage}</li>    
//             ))}
//         </ul>
//         <div className="characters">
//             {characters.map((pj)=>(
//                 <Link to={'details/'+ pj.id}>
//                 <div key={pj.id} className="character">
//                     <h2> {pj.name}</h2>
//                     <img src={pj.image} alt="" />
//                     <p>Status: {pj.status}</p>
//                     <p>Species: {pj.species}</p>
//                     <p>Location: {pj.location.name}</p>
//                 </div>
//                 </Link>
//             ))}
//         </div>
//         </>
//   )
// }



function CharactersIndex({currentPage}) {
    const [characters, setCharacters] = useState([])

    useEffect(()=>{
        console.log(currentPage);
        fetch("https://rickandmortyapi.com/api/character/?page="+currentPage)
                .then((response) => response.json())
                    .then((data) => setCharacters(data.results))
    },[currentPage])
    
    console.log(characters);
    
    if (!characters){
        return(
            <p>Cargando...</p>
        )
    }
    return (
        <div className="characters">
            {characters.map((pj)=>(
                <Link to={'details/'+ pj.id}>
                <div key={pj.id} className="character">
                    <h2> {pj.name}</h2>
                    <img src={pj.image} alt="" />
                    <p>Status: {pj.status}</p>
                    <p>Species: {pj.species}</p>
                    <p>Location: {pj.location.name}</p>
                </div>
                </Link>
            ))}
        </div>
  )
}

export default CharactersIndex