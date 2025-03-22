import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  watchlist: [],
  watched: [],
};

export default function GlobalProvider(props) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addMovieToWatchList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };
  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchList,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export const GlobalContext = createContext(initialState);