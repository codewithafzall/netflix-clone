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
    <div className='bg-black md:bg-transparent flex fixed md:absolute pt-3 md:pt-0 w-full z-10 md:flex-row justify-between'>
      <div>
        <img className='w-28 mx-auto m-1 md:w-48 md:mx-0 md:m-4' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
         alt='logo'/>
      </div>
      {user && (
        <div className='flex justify-around mb-2 md:m-7 p-2'>
          <button onClick={handleGptSearch} className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 md:mr-2 w-24 text-xs md:w-40 h-10'>{showGpt ? "Home" : "GPT Search"}</button>
        <button onClick={handleSignOut} className='rounded-full md:ml-2 w-10 md:w-10 text-sm'><img className='rounded-full' alt='signout-logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6H9CXr6dDkFXNxOI0BTfkG4nD_BblFce7J1rj4tCmbNwh1XPtORwMmCKSS3NCZZ_k7I0&usqp=CAU" /></button>
      </div>
      )}
      
    </div>
  )
}

export default Header