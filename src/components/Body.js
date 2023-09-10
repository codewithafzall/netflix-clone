import React from 'react';
import Login from "./Login";
import HomePage from "./HomePage";
import { BrowserRouter , Routes , Route, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from 'react-redux';

const Body = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
   
     onAuthStateChanged(auth, (user) => {
       if (user) {
         
         const {uid , email } = user;
         dispatch(addUser({uid : uid ,email : email}));
         
       } else {
        dispatch(removeUser());
       }
     });
   
    },[]);
  return (
    <BrowserRouter>
    <Routes>

     
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<HomePage/>}/>
   

    </Routes>
   </BrowserRouter>
  )
}

export default Body