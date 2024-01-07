import React, {useState, useEffect} from 'react';
import './App.css';
import { getMoviesList, searchMovies } from './api.js'

const App = () => {
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    getMoviesList().then(result => 
      setPopularMovies(result)
    )
  }, [])

  const PopularMoviesList = () => {
    const imgUrl = `https://image.tmdb.org/t/p/w500`
    return popularMovies.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
          <div className="Movie-title">{movie.title}</div>
          <img className="Movie-image" src={`${imgUrl}/${movie.poster_path}`}/>
          <div className="Movie-date">Released: {movie.release_date}</div>
          <div className="Movie-rating">{movie.average_rating}</div>
        </div>
      )
    })
  }

  const search = async (key) => {
    if (key.length > 3) {
      const query = await searchMovies(key)
      setPopularMovies(query.results)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Search Movies Page with ReactJS</h1>
        <input type="text" placeholder="Search Any Movie" 
         className="Movie-search"
         onChange={({ target }) => search(target.value)}
        />

        <div className="Movie-container">
        {PopularMoviesList()}        
        </div>
      </header>
    </div>
  );
}

export default App;
