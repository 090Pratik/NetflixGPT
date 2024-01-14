// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { API_OPTIONS, TMDB_MOVIE_URL } from "../utils/constants";
// import { addPopularMovies } from "../utils/moviesSlice";
// import { GETPOPULARMOVIES } from "../utils/ApiEndpoints";

// const usePopularMovies = () => {
//   // Fetch Data from TMDB API and update store
//   const dispatch = useDispatch();

//   const popularMovies = useSelector((store) => store.movies.popularMovies);

//   const getPopularMovies = async () => {
//     // const data = await fetch(
//     //   "https://api.themoviedb.org/3/movie/popular?page=1",
//     //   API_OPTIONS
//     // );
    
// const data = await fetch(`${TMDB_MOVIE_URL}/${GETPOPULARMOVIES}`, API_OPTIONS);
    
//     const json = await data.json();
//     dispatch(addPopularMovies(json.results));
//   };

//   useEffect(() => {
//     !popularMovies && getPopularMovies();
//   }, []);
// };

// export default usePopularMovies;














import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS, TMDB_MOVIE_URL } from '../utils/constants';
import { addPopularMovies } from '../utils/moviesSlice';
import { GETPOPULARMOVIES } from '../utils/ApiEndpoints';

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector((store) => store.movies.popularMovies)
    
    useEffect(() => {
      if (!popularMovies)
        getPopularMovies();
    }, [])
    
    const getPopularMovies = async () => {
      const data = await fetch(`${TMDB_MOVIE_URL}/${GETPOPULARMOVIES}`, API_OPTIONS);
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    }
}

export default usePopularMovies;