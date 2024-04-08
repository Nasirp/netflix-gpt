import React, { useRef, useState } from 'react'
import Header from "./Header"
import { checkValidate } from '../utils/validate';
import {useNavigate} from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,  updateProfile } from 'firebase/auth';
import {auth} from "../utils/firebase";
import {useDispatch} from "react-redux";
import { addUser } from '../utils/userSlice';
// import { set } from 'firebase/database';
 
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errotMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
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
      photoURL: "https://avatars.githubusercontent.com/u/89035202?s=400&u=3b1fc0ebd49d653f32689edd31b10fa3b060cae4&v=4"
    }).then(() => {
      // Profile updated!
      const {uid, email,displayName,photoURL} = auth.currentUser;
     dispatch(addUser({
      uid:uid,
      displayName:displayName,
      email:email,
      photoURL:photoURL
     }))
      navigate("/browse")
      // ...
    }).catch((error) => {
      // An error occurred
      setErrorMessage(error.message)
      // ...
    });
    console.log(user);
    // ...
    navigate("/Browse");
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
    console.log(user);
    navigate("/Browse");
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

         src='https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg'
         alt='logo'
         />
      </div>
      <form 
      onSubmit={(e) => e.preventDefault()}
      className='absolute w-3/12 p-12 bg-black text-white my-36 mx-auto right-0 left-0 bg-opacity-80'>

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
