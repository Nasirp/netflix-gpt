import React from 'react'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import InfoIcon from '@mui/icons-material/Info';
const VideoTitle = ({title,overview }) => {
  return (
    <div className='w-screen  aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black '>
      <h1 className='text-xl md:text-6xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block text-lg py-2 w-1/4'>{overview}</p>
      <div className='my-4 md:m-0'>
        <button className='py-1 px-3 md:py-4 md:px-10 bg-white  text-lg rounded-lg text-black hover:bg-opacity-80'> <PlayCircleOutlineIcon/> Play</button>
        <button className='hidden md:inline-block p-4 px-10 mx-2 bg-gray-500 bg-opacity-50 rounded-lg text-white'> <InfoIcon/> More Info</button>
      </div>
     
    </div>
  )
}

export default VideoTitle
