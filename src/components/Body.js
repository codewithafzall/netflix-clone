import React, { useEffect } from 'react';
import Login from "./Login";
import HomePage from "./HomePage";
import { BrowserRouter , Routes , Route} from "react-router-dom";


const Body = () => {


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