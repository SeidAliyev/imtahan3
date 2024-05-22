import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import routes from "../src/Routes/routes"
import { useSelector, useDispatch } from 'react-redux'
import { setFood } from '../src/Redux/Features/foodSlicer'
import axios from 'axios';
import { useEffect } from 'react';

const router = createBrowserRouter(routes);

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    axios.get("http://localhost:5000/api/food").then((res)=>dispatch(setFood(res.data)))
  }, [])

  return (
    <RouterProvider router={router} />
  )
}

export default App
