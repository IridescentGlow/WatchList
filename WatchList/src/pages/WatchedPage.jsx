import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import MovieCard from './MovieCard';
import Navigation from './Navigation';

const Watched = () => {

    const { watched } = useContext(GlobalContext);

    return (
        <div className="movie-page">
          <header>
            <Navigation />
          </header>
            <div className="container">
                <div className="header">
                    <h1 className="heading">Watched Movies</h1>

                    <span className="count-pill">{watched.length} {watched.length === 1 ? "Movie" : "Movies"}</span>
                </div>

                {watched.length > 0 ? (
                    <div className="movie-grid">
                        {watched.map(movie => (
                            <MovieCard movie={movie} type="watched" />
                        ))}
                    </div>
                ) : (
                    <h2 className="no-movies">You haven't watched any movies!</h2>
                )}
            </div>
        </div>
    )
}

export default Watched;