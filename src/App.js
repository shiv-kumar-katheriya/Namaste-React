import React from "react";
import  ReactDOM  from "react-dom/client";


import AppLayout from "./components/AppLayout";
import About from "./components/about";

import  {createBrowserRouter, RouterProvider} from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Body from "./components/Body";
import Cart from "./components/Cart";
import RestaurentMenu from "./components/RestaurentMenu";



const appRouter =  createBrowserRouter([
    {   
        path : "/",
        element : <AppLayout />,
        children : [
            {
                path : "/",
                element : <Body />
            },
            {
                path : "/about",
                element : <About />
            },
            {
                path : "/contact",
                element : <Contact />
            },
            {
                path : "/cart",
                element : <Cart />
            },
            {
                path : "/restaurent/:resId",
                element : <RestaurentMenu />
            }
        ],
        errorElement  : <Error />
    },

]) 

const root = ReactDOM.createRoot(document.getElementById('root'))


root.render( <RouterProvider router={appRouter} />);
