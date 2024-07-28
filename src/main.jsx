import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signinpage from './auth/sign-in/Signinpage.jsx'
import Home from './home/Home.jsx'
import Dashboard from './dashboard/index.jsx'
import EditResume from './dashboard/resume/[resumeid]/edit/index.jsx'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  {
    element:<App/>,
    children:[
    {
      path:'/dashboard',
      element:<Dashboard/>
    },
    {
      path:'/dashboard/resume/:resumeid/edit',
      element:<EditResume/>
    }
  ]
  },
  {
    path:'/',
    element:<Home/>
  },

  
  {
    path:'/auth/sign-in',
    element:<Signinpage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    
    <div >
    <RouterProvider  router={router} />
    </div>
    </ClerkProvider>
  </React.StrictMode>,
)
