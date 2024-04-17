import React, { useRef } from 'react';
import lang from "../utils/languageConstant";
import { useSelector } from 'react-redux';
import openai from "../utils/openAi";
const GptSearBar = () => {
    const searchText = useRef(null);
    const langKey = useSelector((store) => store.config.lang);

    const handleGptSearchClick = async()=>{
      // console.log(searchText.current.value);
      
      const gptQuery = "act as a movie recommendation system and suggest some movies for the query "+
                        searchText.current.value + ". only gives me names of 5 movies, comma seperated like the example result  given ahead. Example Result: Gadar, Don, Tere Nam, Dhadkan, Veer";
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user',content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });
    
      // console.log(gptResults.choices);



    }
  return (
    <div className='pt-[40%]  md:pt-[10%] flex justify-center '>
   
    <form className='w-full  md:w-1/2 bg-black grid grid-cols-12'onSubmit={(e)=>e.preventDefault()}>
    <input 
        ref={searchText}
        type='text' 
        className='md:p-4 m-4 col-span-9' 
       placeholder= {lang[langKey].gptSearchPlaceholder}
        />
      <button className=' col-span-3 m-4 md:px-4 px-2 py-2 bg-red-700 text-white rounded-lg'
        onClick={handleGptSearchClick}
         >
        {lang[langKey].Search}
      </button>
    </form>
    
    </div>
  )
}

export default GptSearBar
