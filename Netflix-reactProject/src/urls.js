import {API_KEY} from './constants/constants'
export const originals = `/discover/tv?api_key=${API_KEY}&with_networks=213`

export const action = `/discover/movie?api_key=${API_KEY}&with_genres=28`
export const comedy = `/discover/movie?api_key=${API_KEY}&with_genres=35`
export const horror = `/discover/movie?api_key=${API_KEY}&with_genres=27`
export const romance = `/discover/movie?api_key=${API_KEY}&with_genres=10749`
export const documentaries = `/discover/movie?api_key=${API_KEY}&with_genres=99`

//https://api.themoviedb.org/3/movie/popular?api_key=27ad9e021a68e8aee2e226427ceb9558