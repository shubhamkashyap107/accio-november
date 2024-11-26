import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar'
import Home from "./Components/Home"
import New from "./Components/New"
import About from "./Components/About"

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />


        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          <Route path='/about' element={<About />} />
        </Routes>


      </div>
    </BrowserRouter>
  )
}

export default App