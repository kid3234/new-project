import React from "react";

const MovieDescription = ({ movie }) => {
    return (
        <div className='description' >
            <div>
                <img
                    src={movie?.poster_path !== 'N/A' ? `https://image.tmdb.org/t/p/w500${movie?.poster_path}` : 'http://via.placeholder./400'}
                    alt={movie?.original_title}
                /> <img src="" alt="" />
            </div>
            <div className="desctext">
                <h1>{movie?.original_title}</h1>
                <h3></h3>
                <div className="RD">
                    <p>Rating: {movie?.vote_average}</p>
                    <p>Number of vote: {movie?.vote_count}</p>
                    <p>Release Date: {movie?.release_date}</p>
                </div>
                <div>
                    <h2>overview</h2>
                    <p>{movie?.overview}</p>
                </div>

            </div>


        </div >
    )
}

export default MovieDescription