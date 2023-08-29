import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/scrappp';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom"

import Home from "./Routes/Home" ;
import Shop from "./Routes/Products" ;
import Wishlist from "./Routes/Wishlist";
import Layout from "./Routes/App";
import Error from "./Routes/Error";


const router = createBrowserRouter([
  { 
    element: <Layout/>,
    errorElement: <Error />,
    children: [
      {
      path: "/",
      index: true,
      element: <Home/>,
      },
      {
        path: "/products",
        element: <Shop/>,
      },
      {
        path: 'wishlist',
        element: <Wishlist/>
      },
    ]
  },
 ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < RouterProvider router={router}/>
  </React.StrictMode>
);

// const Root = () => {
//   return <RouterProvider router={router}/>
// }
export default App;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
