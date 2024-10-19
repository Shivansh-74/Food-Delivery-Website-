import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import Items from './components/Items.jsx'
import About from './components/About.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
       path:"",
       element:<Home/>
      },
      {
       path:"about",
       element:<About/>
      },
      {
        path:"items",
        element:<Items/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
