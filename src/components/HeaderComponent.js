import { Link } from "react-router-dom";
import { appLogo } from "../utils/resImg"
import useOnlineStatus from "../utils/useOnlineStatus";
import { useEffect, useState } from "react";



const HeaderComponent = () =>{

    const p  = useOnlineStatus();
    
    return (
        <>
            <div className="flex justify-between bg-lime-500 shadow-sm">
                <div className="">
                    <img className="w-32" src={appLogo} />
                </div>
                <div className="">
                    <ul className="flex flex-wrap m-1 p-10 ">
                        <li className="px-10 font-black text-2xl">
                            Online : { p ? "✅" : "🔴"} 
                        </li>
                        <li className="px-10 font-black text-2xl hover:text-green-50 ">
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li className="px-10 font-black text-2xl hover:text-green-50 ">
                            <Link to={"/grocery"}>Grocery</Link>
                        </li>
                        <li className="px-10 font-black text-2xl hover:text-green-50 ">
                            <Link to={"/about"}>About</Link>
                        </li>
                        <li className="px-10 font-black text-2xl hover:text-green-50 ">
                            <Link to={"/contact"}>Contact Us</Link>
                        </li>
                        <li className="px-10 font-black text-2xl hover:text-green-50 ">
                            <Link to={"/Cart"}>Cart</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
       
    )
    
    
} 
export default HeaderComponent;