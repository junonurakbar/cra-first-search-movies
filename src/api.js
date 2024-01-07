import axios from "axios"
// import 'dotenv/config'

// process.env ga work ngentot!
const baseUrl = "https://api.themoviedb.org/3"
const apiKey = "3793b75837ea6862d036905c029999a3"

// const baseUrl = process.env.REACT_APP_BASEURL
// const apiKey = process.env.REACT_APP_APIKEY

// get movies from API
export const getMoviesList = async () => {
  // https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc
  // const movies = await axios.get(`${baseUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`)
  const movies = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`)
  return movies.data.results
}

// search movies with API
export const searchMovies = async (key) => {
  const search = await axios.get(`${baseUrl}/search/movie?page=1&api_key=${apiKey}&query=${key}`)
  return search.data
}