import React from 'react'
import "./home.scss"
import Food from './Food'

const Home = () => {
  return (
    <div className='container'>
      <div className='homeCont'>
        <h6>OUR MENU</h6>
        <h3>Discover Our Exclusive Menu</h3>
        <div className='dinners'>
          <button>Main</button>
          <button>Dessert</button>
          <button>Drinks</button>
        </div>
      </div>
      <Food/>
    </div>
  )
}

export default Home