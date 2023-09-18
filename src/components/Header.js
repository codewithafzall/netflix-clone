import React, { useEffect } from 'react';
import { signOut, getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { auth } from '../utils/firebase';
import { toggleGpt } from '../utils/movieSlice';

const Header = () => {

 const navigate = useNavigate();
 const user = useSelector((store)=> store.user);
 const showGpt = useSelector((store)=> store.movies.showGpt)
 const dispatch = useDispatch();

    useEffect(()=>{
   
     const unsubscribe = onAuthStateChanged(auth, (user) => {
       if (user) {
         
         const {uid , email, displayName } = user;
         dispatch(addUser({uid : uid ,email : email, displayName : displayName}));
         navigate("/home");
         
       } else {
        dispatch(removeUser());
        navigate("/")
       }
     });
      return ()=> unsubscribe();
    },[]);

  const handleSignOut = ()=>{
    const auth = getAuth();
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate('/error')
    });
  };

  const handleGptSearch = ()=>{
    dispatch(toggleGpt());
  };

  return (
    <div className=' absolute bg-gradient-to-b from-black w-full z-10 flex justify-between'>
      <div>
        <img className='w-48 m-4' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
         alt='logo'/>
      </div>
      {user && (
        <div className='flex m-7 p-2'>
          <button onClick={handleGptSearch} className='bg-purple-600 rounded-lg ms-2 px-10 text-sm'>{showGpt ? "Home" : "GPT Search"}</button>
        <button onClick={handleSignOut} className='bg-red-600 rounded-lg ms-2 px-4 text-sm'>Sign Out</button>
      </div>
      )}
      
    </div>
  )
}

export default Header