import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { YT_VIDEO_TRAILER_QUERY } from "../utils/constants";
import Shimmer from "./Shimmer";


const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  //if (!movies) return;
  if (!movies) return <Shimmer />;

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} query={YT_VIDEO_TRAILER_QUERY} />
    </div>
  );
};
export default MainContainer;