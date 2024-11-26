import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className='bg-black flex justify-between p-7 text-white'>
        <h1>LOGO</h1>



        <div className='flex gap-6'>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/new"}>New</Link>
        </div>

    </div>
  )
}

export default Navbar