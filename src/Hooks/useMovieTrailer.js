import React, { useEffect } from 'react'
import {useDispatch} from "react-redux";
import { addTrailerVideo } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constant';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const MovieVideo = async() =>{
          const data = await fetch("https://api.themoviedb.org/3/movie/976573/videos?language=en-US", API_OPTIONS);
          const json = await data.json();
         
            
          const filterData = json.results.filter((video) => video.type === "Trailer");
          const trailer = filterData.length ? filterData[0] : json.results[0];
        // console.log(trailer);
          
          dispatch(addTrailerVideo(trailer))
    };
      useEffect(() => {
       MovieVideo();
      },[])
  return (
    <div>
       
    </div>
  )
}

export default useMovieTrailer
