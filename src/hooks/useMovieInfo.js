import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TMDB_MOVIE_URL } from "../utils/constants";
import { addMovieInfo } from "../utils/MovieDetails";
import { GETMOVIEINFO } from "../utils/ApiEndpoints";

const useMovieInfo = (movieId) => {
  const dispatch = useDispatch();
  const movieInfo = useSelector((store) => store.details.movieInfo);

  useEffect(() => {
    if (!movieInfo.length) getMovieInfo();
  }, []);

  const getMovieInfo = async () => {
    const data = await fetch(
      `${TMDB_MOVIE_URL}/${movieId}${GETMOVIEINFO}`,
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addMovieInfo(json));
  };
};

export default useMovieInfo;
