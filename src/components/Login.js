import React, { useRef, useState } from "react";
import Header from "./Header";
import { formValidation } from "../utils/validate";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";

const Login = () => {
 
  const dispatch = useDispatch();

  const [isSignIn, setIsSignIn]= useState(true);
  const [errorMessage , setErrorMessage]= useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();
   
  const handleSignIn = ()=>{
    setIsSignIn(!isSignIn);
  };
  const handleLogin = ()=>{
    
    const message = formValidation(email.current.value , password.current.value);
    setErrorMessage(message);

    if(message) return;

    if(!isSignIn){
     
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          updateProfile(user, {
            displayName:  name.current.value , photoURL: ""
          }).then(() => {
            const {uid , email, displayName } = auth.currentUser;
            dispatch(addUser({uid : uid ,email : email, displayName : displayName}));
            setIsSignIn(true);
          }).catch((error) => {
           alert("please fill the details carefully")
          });
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorText = error.message;

          setErrorMessage(errorCode + "-" + errorText)
        
        });
    }
    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
     navigate("/home");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorText = "Not a Valid User";

    setErrorMessage(errorCode +"-"+ errorText);
  });
    }

  }

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-image"
        />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className={` w-4/12 absolute p-12 bg-black my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80`}>
        
        <h1 className="font-bold text-3xl mb-3">{isSignIn ? "Sign  in" : "Sign Up"}</h1>

        {!isSignIn && 
          <div>
        <input ref={name} type="text" className="w-full p-3 my-3 mr-2 rounded-lg bg-gray-700" placeholder="Full Name"/>

        <div>
          <input type="text"className="w-full p-3 my-3 rounded-lg bg-gray-700" placeholder="Phone Number"/>
        </div>

        </div>}
        <input ref={email} autoComplete="off" className="w-full p-3 my-3 rounded-lg bg-gray-700" type="text" placeholder="Email Address" />
        
        <input ref={password} className="w-full p-3 my-3 rounded-lg bg-gray-700" type="password" placeholder="Password" />
        
        <p className="text-red-600 text-sm">{errorMessage}</p>
        
        <button onClick={handleLogin} className="py-3 bg-red-600 w-full rounded-lg mt-4 text-lg">{isSignIn ? "Sign In" : "Sign Up"}</button>
        
        <p onClick={handleSignIn} className="my-2 cursor-pointer text-sm">{isSignIn ? "New to Netflix? Signup Now" : "Already Registered? SignIn"}</p>
        
        <p className="text-xs my-4 text-gray-400">This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="text-blue-700 text-sm">Learn more.</span></p>

      </form>
    </div>
  );
};

export default Login;
