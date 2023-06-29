import React from 'react';
import {Link, Outlet } from "react-router-dom";
import Gallery from "./Gallery"

function TVShows(props) {
    let pageTitle=""
    if(props.moviesOrShows==="tv"){
        pageTitle="TV Shows"
    }else if(props.moviesOrShows==="movies"){
        pageTitle="Movies"
    }
    return (
        <div className="row">
            <div className='row text-center mt-5'>
                <h1>{pageTitle}</h1>
                <div className='row navbar'>
                    <Link className='col nav-link' to="Search">
                        Search
                    </Link>
                    <Link className='col nav-link' to="Browse">
                        Browse
                    </Link>
                </div>
            </div>
            <Outlet />
            <Gallery />
        </div>
    )
}

export default TVShows;