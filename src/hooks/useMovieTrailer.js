import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TMDB_MOVIE_URL } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { GETMOVIETRAILER } from "../utils/ApiEndpoints";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    // const data = await fetch(
    //   "https://api.themoviedb.org/3/movie/" +
    //     movieId +
    //     "/videos?language=en-US",
    //   API_OPTIONS
    // );


    const data = await fetch(
      `${TMDB_MOVIE_URL}/${movieId}/${GETMOVIETRAILER}`,
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    //!trailerVideo &&
     getMovieVideos();
  }, []);
};

export default useMovieTrailer;