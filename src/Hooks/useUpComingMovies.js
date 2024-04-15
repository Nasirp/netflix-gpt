import {useDispatch} from "react-redux";
import { API_OPTIONS, UPCOMING_URL } from "../utils/constant";
import {addUpComingMovies} from "../utils/moviesSlice";
import { useEffect } from "react";


const useUpComingMovies = () => {

    const dispatch = useDispatch();

    const upComingMovies = async() => {
        const data = await fetch(UPCOMING_URL, API_OPTIONS);
        const json = await data.json();
       
       dispatch(addUpComingMovies(json.results));
        };
        useEffect(() =>{
        upComingMovies();
        }, []);
};

export default useUpComingMovies;