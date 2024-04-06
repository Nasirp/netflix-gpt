import React, { useState } from 'react'
import Header from "./Header"

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignForm = () =>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img

         src='https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg'
         alt='logo'
         />
      </div>
      <form className='absolute w-3/12 p-12 bg-black text-white my-36 mx-auto right-0 left-0 bg-opacity-80'>

        <h1 className='text-white my-2 text-lg font-bold'>

        {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm &&
        <input 
         type='text'
         placeholder='Full Name' 
         className='p-4 my-4 w-full bg-gray-700 rounded-md'

         />
        }
        <input 
         type='text'
         placeholder='Email' 
         className='p-4 my-4 w-full bg-gray-700 rounded-md'

         />

        <input 
         type='text' 
         placeholder='Pasword' 
         className='p-4 my-4 w-full bg-gray-700 rounded-md'

         />
        <button className='py-4  my-4 w-full bg-red-800 rounded-lg' > {isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignForm}> {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
      </form>
     
    </div>
  )
}

export default Login
