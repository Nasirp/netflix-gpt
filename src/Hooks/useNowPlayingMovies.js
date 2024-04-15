import {useDispatch} from "react-redux";
import { API_OPTIONS, MOVIES_URL } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useNowPlayingMovies = () => {

    const dispatch = useDispatch();

    const NowPlayingMovies = async() => {
        const data = await fetch(MOVIES_URL, API_OPTIONS);
        const json = await data.json();
        // console.log(json);
       dispatch(addNowPlayingMovies(json.results));
        };
        useEffect(() =>{
      NowPlayingMovies();
        }, []);
};

export default useNowPlayingMovies;