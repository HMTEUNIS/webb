import './App.css';
import React, { Suspense, useState } from "react";
import Home from "./Home"
import About from "./About"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import { Routes, Route } from "react-router-dom"


function App() {

  return (
    <div className="App">
       <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/about' element={<About />} />
       <Route path='/portfolio' element={<Portfolio />} />
       <Route path='/contact' element={<Contact />} />


       </Routes>
      </div>
      
  );
}

export default App;
