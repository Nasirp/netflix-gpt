import React, { useEffect } from 'react'
import GptSearBar from './GptSearBar'
// import GptSuggetion from './GptSuggetion'
import { BackgroundImg, OPTION1, YOUTUBE_API } from '../utils/constant'

const GptSearch = ({data}) => {
 
  // const getVideo = async() => {
  
	// const response = await fetch(YOUTUBE_API, OPTION1);
	// const result = await response.json();
	// console.log(result);
  // const data = result.results;
  // console.log(data);

  
  // }
  // useEffect(()=>{
  //  getVideo();
  // },[]);

  return (
    <>
    <div className='absolute -z-10'>
      <img className='h-screen object-cover md:w-screen' alt='logo'  src={BackgroundImg}/>
    </div>
      <div>
      <GptSearBar/>

      </div>
      
    
    </>
  )
}

export default GptSearch
