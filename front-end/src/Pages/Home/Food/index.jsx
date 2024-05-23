import React from 'react'
import "./food.scss"
import { useSelector, useDispatch } from 'react-redux'
import { searchFood,AZFood } from '../../../Redux/Features/foodSlicer'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const Food = () => {
  const food = useSelector((state) => state.foods.food)
  const dispatch = useDispatch()
  const search = useRef()
  return (
        <>
        <div className='Mysearch'>
            <input ref={search} placeholder='...search' type="text" />
            <button onClick={()=>{dispatch(searchFood(search.current.value)),search.current.value=''}}>Search</button>
        </div>
        <button onClick={()=>dispatch(AZFood())}>A-Z</button>
        <div  className='foodContainer'>
        {food&&food.map((elem,index)=>{
            return(
            <div key={index} className='food'>
            <img src={elem.image} alt="" />
            <Link to={`/detail/${elem._id}`}>
                 <h3>{elem.title}</h3>
                <p>{elem.content}</p>
            </Link>
            <h4>{elem.price}$</h4>
        </div>)
        })}
    </div>
        </>
    
  )
}

export default Food