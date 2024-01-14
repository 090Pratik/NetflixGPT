import { BG_URL } from "../utils/constants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div className="w-full -z-10 fixed">
        <img
          className="h-screen object-cover bg-gradient from-black w-full"
          src={BG_URL}
          alt="logo"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GPTMovieSuggestions />
      </div>
    </>
  );
};
export default GPTSearch;