import React, { useEffect, useState } from 'react'
import {baseUrl, API_KEY,imageUrl} from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'
function Banner(props) {
  const [movie,setMovie] = useState()
 

    useEffect(() => {
      axios
        .get(props.url)
        .then((response) => {
          console.log(response.data);
          setMovie(
            response.data.results[
              Math.floor(Math.random() * response.data.results.length + 1)
            ]
          );
        })
        .catch((error) => {
          console.log(error);
        });
    }, []); 
 console.log("banner",movie)

  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie ? movie.name : ""}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="discription">{movie ? movie.overview : ""}</h1>
      </div>
    </div>
  );
}

export default Banner