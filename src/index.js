import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Body from './components/Body';
import Header from './components/Header'
import About from './components/About';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Restaurantsmenu from './components/Restaurants_menu';

const App=()=>{
  return(
    <>
      <Header />
      <Outlet />  
    </>
  )
}


const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"/",
        element:<Body />
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/restaurants/:id",
        element:<Restaurantsmenu />
      }
    ]
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
