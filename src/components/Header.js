import React from 'react';
import { signOut, getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

 const navigate = useNavigate();
 const user = useSelector((store)=> store.user);

  const handleSignOut = ()=>{
    const auth = getAuth();
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate('/error')
    });
  }

  return (
    <div className=' absolute bg-gradient-to-b from-black w-full z-10 flex justify-between'>
      <div>
        <img className='w-48 m-4' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
         alt='logo'/>
      </div>
      {user && (
        <div className='flex m-7 p-2'>
          <p className='text-black font-semibold uppercase mt-2'>{user.displayName}</p>
        <button onClick={handleSignOut} className='bg-red-600 rounded-lg ms-2 px-4 text-sm'>Sign Out</button>
      </div>
      )}
      
    </div>
  )
}

export default Header