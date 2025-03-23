import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function MovieControls({ type, movie }) {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <FontAwesomeIcon className="icon" icon={faPlus} />
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <FontAwesomeIcon className="icon" icon={faXmark} />
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToWatchlist(movie)}>
            <FontAwesomeIcon className="icon" icon={faPlus} />
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeFromWatched(movie.id)}
          >
            <FontAwesomeIcon className="icon" icon={faXmark} />
          </button>
        </>
      )}
    </div>
  );
}
