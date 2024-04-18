import React from 'react'
import MovieList from './MovieList'
import {useSelector} from "react-redux"
const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  return (
    movies.NowPlayingMovies && (
    <div className='  bg-black'>
    <div className=' mt-0 md:-mt-52 pl-3 md:pl-20 relative z-20 opacity-1'>
    <MovieList title={"Now Playing"} movies={ movies?.NowPlayingMovies}/>
    <MovieList title={"Treanding"} movies={ movies?.NowPlayingMovies}/>
    <MovieList title={"Popular"} movies={ movies?.popularMovies}/>
    <MovieList title={"Up Comming"} movies={ movies.upComingMovies}/>
    <MovieList title={"Horror"} movies={ movies?.NowPlayingMovies}/>
    </div>
    
    </div>
    )
  )
}

export default SecondaryContainer;
