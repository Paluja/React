import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function CharacterDetails() {
    const {id} = useParams();
    const [character,setCharacter] = useState();

    useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/character/"+id)
            .then((response) => response.json())
                .then((data) => setCharacter(data))

    },[])

    if (!character){
        return(
            <p>Cargando...</p>
        )
    }

    return (
    <>
        <div className="character-container">
                <h1 className='character-name middle'>Detalles de {character.name}</h1>
                <h1 className='character-name bottom'>Detalles de {character.name}</h1>
        </div>
        <div className="character">
            
            <img src={character.image} alt="" />
            <p>Status: {character.status}</p>
            <p>Gender: {character.gender}</p>
            <p>Species: {character.species}</p>
            <p>Origin: {character.origin.name}</p>
            <p>Location: {character.location.name}</p>
        </div>
    </>
  )
}

export default CharacterDetails