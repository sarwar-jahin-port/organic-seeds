import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import MainLayout from './layout/MainLayout.jsx';
import OrderList from './pages/OrderList.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import OrderDetails from './pages/OrderDetails.jsx';
import AllOrders from './pages/AllOrders.jsx';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      }, 
      {
        path:"order-list",
        element: <PrivateRoute><OrderList/></PrivateRoute>
      },
      {
        path: "order-list/order-details/:id",
        element: <PrivateRoute><OrderDetails/></PrivateRoute>
      },
      {
        path: "all-orders",
        element: <PrivateRoute><AllOrders/></PrivateRoute>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <Toaster/>
  </React.StrictMode>,
)
