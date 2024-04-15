import {useDispatch} from "react-redux";
import { API_OPTIONS, TOPRATED_URL } from "../utils/constant";
import {addTopRatedMovies} from "../utils/moviesSlice";
import { useEffect } from "react";


const useTopRatedMovies = () => {

    const dispatch = useDispatch();

    const TopRatedMovies = async() => {
        const data = await fetch(TOPRATED_URL, API_OPTIONS);
        const json = await data.json();
     
       dispatch(addTopRatedMovies(json.results));
        };
        useEffect(() =>{
        TopRatedMovies();
        }, []);
};

export default useTopRatedMovies;