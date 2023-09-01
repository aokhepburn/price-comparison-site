import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
// import {createBrowserRouter, RouterProvider} from "react-router-dom"
// import Root from "./Components/Root";
// import Welcome from "./Components/Routes/Welcome";
// import Error from "./Components/Error";
// import CreateAccountPage from "./Components/Routes/CreateAccountPage";
// import LoginPage from "./Components/Routes/LoginPage";
// import ProductsPage from "./Components/Routes/ProductsPage" ;
// import Wishlist from "./Components/Routes/Wishlist";
// import FeaturedProduct from "./Components/Routes/FeaturedProduct";
// import Products from "./Components/Pieces/Products";
// import App from './App';
// import WishlistProducts from './Components/Pieces/WishlistProducts';

 //ReactDOM is rendering the root component of the application which is App.js 
// ReactDOM.render(
//   <React.StrictMode>
//     <App/> 
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const root = createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();






// export default App;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


// const router = createBrowserRouter([
//   { 
//     path: "/",
//     element: <App/>,
//     errorElement: <Error />,
//     children: [
//       {
//       path: "/",
//       index: true,
//       element: <Welcome/>,
//       },
//       {
//         path: "/products",
//         element: <Products/>,
//       },
//       {
//         path: "/wishlist",
//         element: <WishlistProducts/>
//       },
//       // {
//       //   path: "/featuredproduct",
//       //   element: <FeaturedProduct/>,
//       // },
//       {
//         path: "/signup",
//         element: <CreateAccountPage/>
//       },
//       {
//         path: "/login",
//         element: <LoginPage/>
//       },
//     ]
//   }
// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router}/>
//   </React.StrictMode>
// );

// // export default App;
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// const router = createBrowserRouter([
//   { 
//     path: "/",
//     element: <App/>,
//     errorElement: <Error />,
//     children: [
//       {
//       path: "/",
//       index: true,
//       element: <Welcome/>,
//       },
//       {
//         path: "/products",
//         element: <Products/>,
//       },
//       {
//         path: "/wishlist",
//         element: <Wishlist/>
//       },
//       {
//         path: "/featuredproduct",
//         element: <FeaturedProduct/>,
//       },
//       {
//         path: "/signup",
//         element: <CreateAccountPage/>
//       },
//       {
//         path: "/login",
//         element: <LoginPage/>
//       },
//     ]
//   },
// ]);