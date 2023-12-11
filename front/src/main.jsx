import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from  'react-router-dom'
import Login from './login/login.jsx'
import Register from './register/register.jsx'
import Home from './home/Home.jsx'
import Assessments from './assessments/Assessments.jsx'
import Description from './description/Description.jsx'
import Perfil from './perfil/perfil.jsx'
import Perfiledit from './perfil/editarperfil.jsx'
import './index.css'
import Avaliation from './avaliation/Avaliation.jsx'
import Header from './App.jsx'


const router =  createBrowserRouter([
  {
    path:'/',
    element: <Header/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'assessments',
        element: <Assessments/>
      },
      {
        path:'description',
        element: <Description/>
      }
    ]
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:'/register',
    element: <Register/>
  },
  {
    path:'/avaliation',
    element: <Avaliation/>
  },
  {
    path:'/perfil',
    element: <Perfil/>
  },
  {
    path:'/perfiledit',
    element: <Perfiledit/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)