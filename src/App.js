import React, {lazy,Suspense,fallback} from "react";
import  ReactDOM  from "react-dom/client";


import AppLayout from "./components/AppLayout";
// import About from "./components/About";

import  {createBrowserRouter, RouterProvider} from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Body from "./components/Body";
import Cart from "./components/Cart";
import RestaurentMenu from "./components/RestaurentMenu";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import('./components/Grocery'));

const About = lazy(()=>import('./components/About'));


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
                path : "/grocery",
                element : <Suspense fallback={<h1>Wait For a While...</h1>}>     <Grocery /> </Suspense>
            },
            {
                path : "/about",
                element : <Suspense fallback={<h1>Wait For a while...</h1>}><About /></Suspense>
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
