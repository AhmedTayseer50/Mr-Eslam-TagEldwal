import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/component/Home/Home"
import Contact from "../src/component/Contact/Contact"
import Secondary1 from "../src/component/Secondary1/Secondary1"
import Secondary2 from "../src/component/Secondary2/Secondary2"

const App = () => {
  return (
    <div>


    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/Secondary1' element={<Secondary1/>} />
      <Route path='/Secondary2' element={<Secondary2/>} />

    </Routes>
    
    </BrowserRouter>

    </div>
  )
}

export default App
