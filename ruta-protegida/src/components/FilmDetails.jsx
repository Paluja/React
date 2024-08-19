import React from 'react'
import { useFilmContext } from '../context/FilmContext'

function FilmDetails() {
    const {dataFilm} = useFilmContext();
  
    return (
    <>
      <div className="container">
          <h2>{dataFilm.Title}</h2>
          <div className="details">
              <p>{dataFilm.Year}</p>
              <p>{dataFilm.Rated}</p>
              <p>{dataFilm.Released}</p>
              <p>{dataFilm.Runtime}</p>
              <p>{dataFilm.Genre}</p>
              <p>{dataFilm.Director}</p>
              <p>{dataFilm.Writer}</p>
              <p>{dataFilm.Actors}</p>
              <p>{dataFilm.Plot}</p>
          </div>
      </div>
    </>
  )
}

export default FilmDetails