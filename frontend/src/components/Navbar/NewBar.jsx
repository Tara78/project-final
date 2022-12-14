import React from 'react'
import { Link } from 'react-router-dom'

const NewBar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">logo</h1>
      <ul className="navLinks"></ul>
      <Link to= "/"><li>Home</li></Link>
      <Link to= "/About"><li>About</li></Link>
      <Link to= "/Service"><li>Service</li></Link>
      <Link to= "/Booking"><li>Home</li></Link>
      </nav>
  )
}

export default NewBar