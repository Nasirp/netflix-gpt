import React, { useEffect } from "react";
import Tippy from '@tippyjs/react';
import LogoutIcon from '@mui/icons-material/Logout';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import {useNavigate} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) =>store.user);
 const dispatch = useDispatch();

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
 },[]);


 const handleGptSearch = () =>{
  
 }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img
      className='w-44'
       src={LOGO}
       alt='logo'
       />
     

       {user &&(
       <div className=" flex p-4">
       <button className="py-2 px-6 my-2 mx-10 bg-purple-800 text-white rounded-lg"
         onClick={handleGptSearch}
         >GPT Search</button>
        <Tippy 
           theme="light" 
           content={<h1 className="text-red-600 cursor-pointer" onClick={handleSignOut}>Log out</h1>} 
           interactive={true}>
          
            <button className="px-4">
            <LogoutIcon/>
            
            </button>
         
        
        </Tippy>
        </div>
     )  }
  
    </div>
    
  )
}

export default Header
