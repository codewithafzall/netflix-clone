import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

  const [isSignIn, setIsSignIn]= useState(true);
   
  const handleSignIn = ()=>{
    setIsSignIn(!isSignIn);
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
      <form className={`w-full md:w-${isSignIn ? '3/12' : '4/12'} absolute p-12 bg-black my-44 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80`}>
        <h1 className="font-bold text-3xl mb-3">{isSignIn ? "Sign  in" : "Sign Up"}</h1>
        {!isSignIn && 
          <div>
        <div className="flex">
        <input type="text" className="w-full p-3 my-3 mr-2 rounded-lg bg-gray-700" placeholder="First Name"/>
        <input type="text" className="w-full p-3 my-3 ml-2 rounded-lg bg-gray-700" placeholder="Last Name"/>
        </div>
        <div>
          <input type="text"className="w-full p-3 my-3 rounded-lg bg-gray-700" placeholder="Phone Number"/>
        </div>
        </div>}
        <input className="w-full p-3 my-3 rounded-lg bg-gray-700" type="email" placeholder="Email Address" />
        <input className="w-full p-3 my-3 rounded-lg bg-gray-700" type="password" placeholder="Password" />
        <button className="py-3 bg-red-600 w-full rounded-lg mt-4">Sign In</button>
        <p onClick={handleSignIn} className="my-2 cursor-pointer text-sm">{isSignIn ? "New to Netflix? Signup Now" : "Already Registered? SignIn"}</p>
        <p className="text-xs my-4 text-gray-400">This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="text-blue-700 text-sm">Learn more.</span></p>
      </form>
    </div>
  );
};

export default Login;
