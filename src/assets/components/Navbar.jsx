import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul className='h-24 text-white text-2xl fixed w-screen flex flex-row gap-20 justify-center items-center'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Navbar