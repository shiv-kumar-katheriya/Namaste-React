import { Link } from "react-router-dom";
import { appLogo } from "../utils/resImg"
import useOnlineStatus from "../utils/useOnlineStatus";
import { useEffect, useState } from "react";



const HeaderComponent = () =>{

    const p  = useOnlineStatus();
    
    return (
        <>
            <div className="header">
            <div className="logo-container">
                <img className="logo" src={appLogo} />
            </div>
            <div className="nav-items">
                <ul className="nav-list-items">
                    <li>
                        Online : { p ? "✅" : "🔴"} 
                    </li>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/grocery"}>Grocery</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>Contact Us</Link>
                    </li>
                    <li>
                        <Link to={"/Cart"}>Cart</Link>
                    </li>
                </ul>
            </div>
        </div>
        </>
       
    )
    
    
} 
export default HeaderComponent;