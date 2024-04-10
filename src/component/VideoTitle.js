import React from 'react'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import InfoIcon from '@mui/icons-material/Info';
const VideoTitle = ({title,overview }) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className=' text-6xl font-bold'>{title}</h1>
      <p className=' text-lg py-6 w-1/4'>{overview}</p>
      <div>
        <button className='p-4 px-10 bg-white  text-lg rounded-lg text-black hover:bg-opacity-80'> <PlayCircleOutlineIcon/> Play</button>
        <button className='p-4 px-10 mx-2 bg-gray-500 bg-opacity-50 rounded-lg text-white'> <InfoIcon/> More Info</button>
      </div>
     
    </div>
  )
}

export default VideoTitle
