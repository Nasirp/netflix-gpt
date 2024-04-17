import React, { useEffect } from "react";
import Tippy from '@tippyjs/react';
import LogoutIcon from '@mui/icons-material/Logout';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import {useNavigate} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) =>store.user);
 const dispatch = useDispatch();
 const showGptSearch = useSelector((store)=> store.gpt.showGptSearch)
 const handleSignOut = () =>{
  signOut(auth).then(() => {
    // Sign-out successful.
    
  }).catch((error) => {
    // An error happened.
    navigate("/error");
  });
 }

 useEffect(() => {
  const unsubscribe =  onAuthStateChanged(auth, (user) => {
    if (user) {
     
      const {uid, email, displayName,photoURL} = user;
      dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
      navigate("/browse")
      // ...
    } else {
      // User is signed out
      // ...
      dispatch(removeUser());
      navigate("/");
    }
  });
  
  return () => unsubscribe()
 }, []);

 

 const handleGptSearch = () =>{
   dispatch(toggleGptSearchView());
 }
 const handleLanguageChange = (e) =>{
      dispatch(changeLanguage(e.target.value));
}

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between '>
      <img
      className='w-44 mx-auto md:mx-0'
       src={LOGO}
       alt='logo'
       />
     
        
       {
        //use user && because when user is present the show the header
        user &&
        (
       <div className=" flex p-2">
       { showGptSearch &&
       <select className="p-2 m-2 bg-gray-500 rounded-lg text-white" onChange={handleLanguageChange}>
        {SUPORTED_LANGUAGES.map((lang)=>(
          <option key={lang.identifire} value={lang.identifire}>{lang.name}</option>
        ))}
       </select>
       }
       <button className="py-2 px-4 my-2 mx-4 bg-purple-800 text-white rounded-lg"
         onClick={handleGptSearch}
         >
        { showGptSearch ? "Home Page" : "GPT Search"}
        
         </button>
        <Tippy 
           theme="light" 
           content={<h1 className="text-orange-500 cursor-pointer" onClick={handleSignOut}>Log out</h1>} 
           interactive={true}>
          
            <button className=" px-4 text-red-600">
            <LogoutIcon/>
            
            </button>
         
        
        </Tippy>
        </div>
     )  }
  
    </div>
    
  )
}

export default Header
