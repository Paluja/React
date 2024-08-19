import React from 'react'
import { useFilmContext } from '../context/FilmContext'
import {useNavigate } from 'react-router-dom';

function Films() {
  const { setFilm } = useFilmContext();
  const navigate = useNavigate();
  
  function handleInputs(e){
    setFilm(e.target.value);
  }
  
  function handleSubmit(e){
    e.preventDefault();
    navigate("/film-details");

  }

  return (
    <>
      <h2>Detalles de peliculas</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputs} />
        <button type='Submit'>Mostrar Pelicula</button>
      </form>
    </>
  )
}

export default Films