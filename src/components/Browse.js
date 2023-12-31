import Header from "./Header";
import MainContainer from "./MainContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;

// import Header from "./Header";
// import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
// import MainContainer from "./MainContainer";
// import SecondaryContainer from "./SecondaryContainer";
// import usePopularMovies from "../hooks/usePopularMovies";
// import GptSearch from "./GptSearch";
// import { useSelector } from "react-redux";

// const Browse = () => {
//   const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

//   useNowPlayingMovies();
//   usePopularMovies();

//   return (
//     <div>
//       <Header />
//       {showGptSearch ? (
//         <GptSearch />
//       ) : (
//         <>
//           <MainContainer />
//           <SecondaryContainer />
//         </>
//       )}
//     </div>
//   );
// };
// export default Browse;
