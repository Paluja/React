import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import CharactersIndex from '../components/CharactersIndex';
// const nextPage = () => {
//     if (page === 42) return;
//     page++;
//     console.log(page);
//     getcharacter();
// }

// const prevPage = () => {
//     if (page === 1) return;
//     page--;
//     console.log(page);
//     getcharacter();
// }


function PrincipalPage() {
    const btnPages = [];
    const [filter, setFilter] = useState(null);
    // const {page} = useParams();
    const [page,setPage] = useState(0);

    for (let i = 1; i <= 42 ; i++) {
        btnPages[i] = i
    }

    return (
        <>
            <input type="text" onChange={()=>setFilter()}/>
            <ul className='btnPages-container'>
                {btnPages.map((btnPage)=>(
                        <li key={btnPage} onClick={()=>setPage(btnPage)}>{btnPage}</li>    
                ))}
            </ul>
            <CharactersIndex currentPage={page}/>
        </>
    )
}

export default PrincipalPage