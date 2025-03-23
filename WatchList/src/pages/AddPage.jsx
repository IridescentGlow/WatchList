import React, { useState } from 'react';
import ResultCard from './ResultCard';
import Navigation from './Navigation';

export default function Add () {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const onChange = e => {
        e.preventDefault();

        setQuery(e.target.value);

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=6cc5a3f023054b5c1b1cda12c20e3c10&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
            .then((res) => res.json())
            .then((data) => {
                if (!data.errors) {
                    setResults(data.results);
                } else {
                    setResults([]);
                }
            });
    }

    return (
        <div className="add-page">
          <header>
            <Navigation />
          </header>
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input type="text"
                            placeholder="search movie"
                            value={query}
                            onChange={onChange}
                        />
                    </div>
                    {results.length > 0 && (
                        <ul className="results">
                            {results.map(movie => (
                                <li key={movie.title + movie.release_date}>
                                    <ResultCard movie={movie} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}