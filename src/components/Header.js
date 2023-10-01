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
    <div className='bg-black md:bg-transparent flex flex-col fixed md:absolute  w-full z-10 md:flex-row justify-between'>
      <div>
        <img className='w-36 mx-auto m-1 md:w-48 md:mx-0 md:m-4' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
         alt='logo'/>
      </div>
      {user && (
        <div className='flex justify-around mb-2 md:m-7 p-2'>
          <button onClick={handleGptSearch} className='bg-purple-600 rounded-lg md:ms-2 w-28 md:w-40 text-sm h-10'>{showGpt ? "Home" : "GPT Search"}</button>
        <button onClick={handleSignOut} className='bg-yellow-300 md:bg-red-600 rounded-lg md:ms-2 w-28 md:w-36 text-sm'>Sign Out</button>
      </div>
      )}
      
    </div>
  )
}

export default Header