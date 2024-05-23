import React from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState,useEffect } from 'react'

const DetailFood = () => {

   const { id } = useParams()

useEffect(() => {
    axios.get(`http://localhost:5000/api/food/${id}`).then((res)=>setMydata(res.data))
}, []);

const [mydata, setMydata] = useState([]);
   console.log(mydata);

  return (
    <div>
        <img src={mydata.image} alt="" />
    <h1>{mydata.title}</h1>      
    <p>{mydata.price}$</p>   
    <p>{mydata.content}</p>
    </div>
  )
}

export default DetailFood
