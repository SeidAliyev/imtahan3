import React from 'react'
import "./navbar.scss"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='myBackground'>
      <div className='nav MYcontainer'>
      <h1>Tasty</h1>
      <ul className='navLinks'>
        <Link to={"/"}>Home</Link>
        <li>qwefqwef</li>
        <li>wefqef</li>
        <li>eqfqef</li>
        <li>qefqef</li>
        <li>qwefweef</li>
      </ul>
      </div>
      <div className='cakeCont MYcontainer'>
        <h3>Book a table for Yourself at a time convenient  for you</h3>
        <button className='cakeBut'>Book a table</button>
      </div>
    </div>
  )
}

export default Navbar