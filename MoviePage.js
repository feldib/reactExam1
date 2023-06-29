import React from 'react';
import { Link, useLocation } from "react-router-dom";

function MoviePage() {
    const location = useLocation()
    const {from, movie} = location.state
    return (
        <div className='row'>
            <div className='row'>
                <h1 className=''>{movie.title}</h1>
            </div>
            <div className='row'>
                <div className='col'>
                    <div className='row'>
                        <img scr={`https://www.themoviedb.org/t/p/w440_and_h660_face/${movie.poster_path}`} />
                    </div>
                    <h3 className='row'>
                        {movie["release_date"]}
                    </h3>
                </div>
                <div className='col'>
                    <h2 className='row'>Description</h2>
                    <p className='row'>{movie["overview"]}</p>
                </div>
            </div>
            <div className='row'>
                PLACEHOLDER FOR ADDITIONAL PICTURES
            </div>
            <div className='row'>
                <Link to={`${from}`}>
                    <button className='btn btn-secondary'>
                        Back to Browsing
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default MoviePage;