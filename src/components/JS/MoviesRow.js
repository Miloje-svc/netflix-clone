/* eslint-disable react-hooks/exhaustive-deps */
import '../SCSS/MoviesRow.scss'
import { useEffect, useState } from 'react'
import Feature from './Feature'

const MoviesRow = ({ fetchUrl, title }) => {
  const [movies, setMovies] = useState([])
  const [showFeature, setShowFeature] = useState(false)
  const [movie, setMovie] = useState([])
  const BASE_URL = 'https://api.themoviedb.org/3'

  useEffect(() => {
    const getMovies = async () => {
      await fetch(`${BASE_URL}${fetchUrl}`)
        .then((res) => res.json())
        .then((movie) => setMovies(movie.results))
    }

    getMovies()
  }, [])

  return (
    <section className="movies">
      <h1>{title}</h1>
      <div className="movies__row">
        {movies.map(movie => <img
          key={movie.id}
          onClick={() => {
            setShowFeature(true)
            setMovie(movie)
          }}
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={movie.title} />
        )}
      </div>
      <Feature
        showFeature={showFeature}
        movie={movie}
        setShowFeature={setShowFeature}
      />
    </section>
  )
}

export default MoviesRow
