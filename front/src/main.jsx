import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from  'react-router-dom'
import App from './App.jsx'
import Login from './login/login.jsx'
import Register from './register/register.jsx'
import './index.css'

const router =  createBrowserRouter([
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:'/register',
    element: <Register/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)