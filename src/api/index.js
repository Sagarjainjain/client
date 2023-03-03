import axios from 'axios'

const url = "http://localhost:5000/movies";

export const getMovies = () => axios.get(url);
export const createMovie = (newMovie) => axios.post(url, newMovie)