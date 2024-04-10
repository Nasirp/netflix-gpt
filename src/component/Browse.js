import Header from './Header'
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
// import usePopularMovies from "../hooks/usePopularMovies";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
// import GptSearch from './GptSearch';


const Browse = () => {
  useNowPlayingMovies();
  // usePopularMovies();
  
  return (
    <div>
      <Header/>
      {/* <GptSearch/> */}
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
