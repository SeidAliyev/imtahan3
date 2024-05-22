import React from 'react'
import "./food.scss"
import { useSelector, useDispatch } from 'react-redux'
import {  } from '../../../Redux/Features/foodSlicer'

const Food = () => {
    const food = useSelector((state) => state.foods.food)
  const dispatch = useDispatch()

  return (
        <>
        <input placeholder='...search' className='Mysearch container' type="text" />
        <div  className='foodContainer'>
        {food&&food.map((elem,index)=>{
            return(
            <div key={index} className='food'>
            <img src={elem.image} alt="" />
            <div>
                 <h3>{elem.title}</h3>
                <p>{elem.content}</p>
            </div>
            <h4>{elem.price}</h4>
        </div>)
        })}
    </div>
        </>
    
  )
}

export default Food