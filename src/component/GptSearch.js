import React from 'react'
import GptSearBar from './GptSearBar'
import GptSuggetion from './GptSuggetion'
import { BackgroundImg } from '../utils/constant'

const GptSearch = () => {
  return (
    <div>
    <div className='absolute -z-10'>
    <img
      className=''
       src={BackgroundImg}
       alt='logo'
       />
    </div>
 <GptSearBar/>
 <GptSuggetion/>
    </div>
  )
}

export default GptSearch
