import UserRoot from "../Layout/UserRoot/index"
import AdminRoot from "../Layout/AdminRoot/index"
import Home from "../Pages/Home/index"
import Add from "../Pages/Add/index"


const routes =[
    {
        path: "/",
        element: <UserRoot/>,
        children:[
            {
                path: "/",
                element: <Home/>,
            },
        ]
      },
      {
        path: "/",
        element: <AdminRoot/>,
        children:[
            {
                path: "/Add",
                element: <Add/>,
            },
        ]
      },
]

export default routes