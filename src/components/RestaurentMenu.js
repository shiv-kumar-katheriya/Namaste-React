import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RestaurentIdURL } from "../utils/resImg";

const RestaurentMenu = ()=>{
    
    const [menuData,setMenuData] = useState("");
    const param = useParams();

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async ()=>{
        const data = await fetch(RestaurentIdURL+param?.resId);
        const menu = await data.json();
        setMenuData(menu?.data?.cards);
    }
    
    
    if(menuData.length == 0){
        return <div>
            <Shimmer />
        </div>
    }

    function displayData(data){
        let p = listOfMenuItem?.card.card.hasOwnProperty("categories") ? listOfMenuItem?.card.card?.categories[0] : listOfMenuItem?.card.card 
        return p?.itemCards.map(item=>{
            return (
                <li>{item.card?.info?.name} &nbsp;- Rs. {(item.card?.info?.price)/100  }</li>
            )
        })
    }

    let listOfMenuItem = menuData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1];
    return (
        <div>
            <h1>{menuData[0]?.card?.card.info?.name}</h1>
            <ul>
                {   
                  displayData(listOfMenuItem) 
                }    
            </ul>
        </div>
    )
}

export default RestaurentMenu;