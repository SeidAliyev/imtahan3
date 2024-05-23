import React from 'react'
import { Helmet } from 'react-helmet'
import { useSelector, useDispatch } from 'react-redux'
import { removeFood,postFood } from '../../Redux/Features/foodSlicer'
import axios from "axios"
import { useRef } from 'react'

const Add = () => {
  const food = useSelector((state) => state.foods.food)
  const dispatch = useDispatch()

   function deleting(id){
    axios.delete(`http://localhost:5000/api/food/${id}`)
  }

  const title =useRef()
  const content = useRef()
  const price = useRef()
  const image = useRef()

 function postFood(){
    let obj = {
    title:title.current.value,
    content:content.current.value,
    price:price.current.value,
    image:image.current.value
   }
   console.log(obj);

  axios.post("http://localhost:5000/api/food",obj).then((res)=>res.data)

   dispatch(postFood(obj))

   title.current.value = '',
   content.current.value = '',
   price.current.value='',
   image.current.value=''
  }

  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Admin</title>
            </Helmet>
            <table className="min-w-full border-collapse block md:table">
  <thead className="block md:table-header-group">
    <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
      <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
        Image
      </th>
      <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
        Title
      </th>
      <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
        Content
      </th>
      <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
        Price
      </th>
      <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
        Actions
      </th>
    </tr>
  </thead>
  <tbody className="block md:table-row-group">
    {food&&food.map((elem,index)=>{
      return(
        <tr key={index} className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <span className="inline-block w-1/3 md:hidden font-bold">Image</span>
        <img  width={100} src={elem.image} alt="" />
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <span className="inline-block w-1/3 md:hidden font-bold">
         Name
        </span>
        {elem.title}
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <span className="inline-block w-1/3 md:hidden font-bold">
          Content
        </span>
        {elem.content}
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <span className="inline-block w-1/3 md:hidden font-bold">Price</span>
        {elem.price}$
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
          Edit
        </button>
        <button onClick={()=>{dispatch(removeFood(elem)),deleting(elem._id)}} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">
          Delete
        </button>
      </td>
    </tr>
      )
    })}
    
  </tbody>
</table>


<form onSubmit={(e)=>{e.preventDefault(),postFood()}}>
         <input ref={title} placeholder='title' type="text" />
         <input ref={content} placeholder='content' type="text" />
         <input ref={price} placeholder='price' type="number" />
         <input ref={image} placeholder='image' type="text" />
         <button type='submit'>Submit</button>
</form>


       </div>
  )
}

export default Add