import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from  'react-router-dom'
import Login from './login/login.jsx'
import Register from './register/register.jsx'
import Home from './home/home.jsx'
import Assessments from './assessments/assessments.jsx'
import Description from './description/description.jsx'
import './index.css'

const router =  createBrowserRouter([
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:'/register',
    element: <Register/>
  },
  {
    path:'/home',
    element: <Home/>
  },
  {
    path:'/assessments',
    element: <Assessments/>
  },
  {
    path:'/description',
    element: <Description/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)