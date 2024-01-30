import React, { useState, useEffect } from "react";
import axios from "../../Utils/axios";
import requests from "../../Utils/Request";
import './banner.css'

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
          ]
        );
        return request;
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
    console.log(movie);
    function truncate(str, n) {
      return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner-contents"></div>
      <h1 className="banner-title">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <div className="banner-buttons">
        <button className="banner-button">Play</button>
        <button className="banner-button">My List</button>
          </div>
          <h1 className="banner-description">
              {truncate(movie?.overview,150)}
          </h1>
          <div className="banner--fadebottom"/>
    </div>
  );
};

export default Banner;
