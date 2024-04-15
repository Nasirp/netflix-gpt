import React, { useRef, useState } from 'react'
import Header from "./Header"
import { checkValidate } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,  updateProfile } from 'firebase/auth';
import {auth} from "../utils/firebase";
import {useDispatch} from "react-redux";
import { addUser } from '../utils/userSlice';
import { BackgroundImg, Profile } from '../utils/constant';
// import { set } from 'firebase/database';
 
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errotMessage, setErrorMessage] = useState(null);
  
  const name = useRef(null);
  const email = useRef(null);
   const password = useRef(null);
   const dispatch = useDispatch();

  const handleButtonClick = () => {
    // checkValidate()
   
    
    const message = checkValidate( email.current.value, password.current.value);
    setErrorMessage(message);
    if(message) return;

    //sign in / sign up

    if(!isSignInForm){
      //sign up

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )

     .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, 
      photoURL: Profile
    }).then(() => {
      // Profile updated!
      const {uid, email,displayName,photoURL} = auth.currentUser;
     dispatch(addUser({
      uid:uid,
      displayName:displayName,
      email:email,
      photoURL:photoURL
     }))
     
      // ...
    }).catch((error) => {
      // An error occurred
      setErrorMessage(error.message)
      // ...
    });
   
    // ...
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +"-"+ errorMessage)
    // ..
  });
    }

    else{
      //sign in
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode, errorMessage);
  });
    }
  
  }
  const toggleSignForm = () =>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img
         className='w-screen h-screen'
         src={BackgroundImg}
         alt='logo'
         />
      </div>
      <form 
      onSubmit={(e) => e.preventDefault()}
      className='absolute w-80 p-6 bg-black text-white my-36 mx-auto right-0 left-0 bg-opacity-80'>

        <h1 className='text-white my-2 text-lg font-bold'>

        {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm &&
        <input 
        ref={name}
         type='text'
         placeholder='Full Name' 
         className='p-4 my-4 w-full bg-gray-700 rounded-md'

         />
        }
        <input 
         ref={email}
         type='text'
         placeholder='Email' 
         className='p-4 my-4 w-full bg-gray-700 rounded-md'

         />

        <input 
        ref={password}
         type='text' 
         placeholder='Pasword' 
         className='p-4 my-4 w-full bg-gray-700 rounded-md'

         />
         <p className='text-red-700'>{errotMessage}</p>
        <button className='py-4  my-4 w-full bg-red-800 rounded-lg' onClick={ handleButtonClick} > {isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignForm}> {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
      </form>
     
    </div>
  )
}

export default Login
