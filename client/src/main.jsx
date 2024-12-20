import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast';
import './index.css'
import Home from "./views/Home/Home";
import Signup from "./views/Signup/Signup";
import Login from "./views/Login/Login";
import TransactionAdd from "./views/TransactionAdd/TransactionAdd";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/transactionAdd",
    element: <TransactionAdd/>
  },
  {
    path: "/*",
    element: <div>NoT Found</div>
  }
 
])


createRoot(document.getElementById('root')).render(
  <>
  <Toaster />
  <RouterProvider router={router} />
  </>
)
