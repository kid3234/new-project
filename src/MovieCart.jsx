import React, { useState } from "react";

const MovieCard = ({ movie,sendDataToParent }) => {
    const Selectmovie = (movie) => {
        sendDataToParent(movie)
        console.log("this is movie 2", movie);
    }
    return (
            <div className='movie' onClick={()=>Selectmovie(movie)}>
                <div>
                    <p>{movie.release_date}</p>
                </div>
                <div>
                    <img
                        src={movie?.poster_path !== 'N/A' ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'http://via.placeholder./400'}
                        alt={movie?.original_title}
                    />
                </div>
                <div>
                    <span>{movie.release_date}</span>
                    <h3>{movie.original_title}</h3>
                </div>
            </div >
        
    )
}

export default MovieCard