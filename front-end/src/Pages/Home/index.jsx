import React from 'react'
import "./home.scss"
import Food from './Food'
import {Helmet} from "react-helmet";


const Home = () => {
  return (
    <div className='MYcontainer'>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
            </Helmet>
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