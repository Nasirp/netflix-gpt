import {useDispatch} from "react-redux";
import { API_OPTIONS, POPULAR_URL } from "../utils/constant";
import {  addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const usePopularMovies = () => {

    const dispatch = useDispatch();

    const popularMovies = async() => {
        const data = await fetch(POPULAR_URL, API_OPTIONS);
        const json = await data.json();
        // console.log(json);
       dispatch(addPopularMovies(json.results));
        };
        useEffect(() =>{
      popularMovies();
        }, []);
};

export default usePopularMovies;