import React from 'react'
import { IMG_CDN } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-28 md:w-44 pr-3 md:pr-4'>
      <img alt='Loading...' 
        src={IMG_CDN+posterPath}
        />
    </div>
  )
}

export default MovieCard
