import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RestaurentIdURL } from "../utils/resImg";

const RestaurentMenu = ()=>{
    
    const [menuData,setMenuData] = useState("");
    const param = useParams();
    console.log("param is ::: ",param); 
    // const [ listOfMenuItem, setListOfMenuItem ] = useState([]);
    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async ()=>{
        const data = await fetch(RestaurentIdURL+param?.resId);
        const menu = await data.json();
        setMenuData(menu?.data?.cards);
        console.log("menu is :: ",menuData);
    }
    
    
    if(menuData.length == 0){
        console.log("Inside if")
        return <div>
            <Shimmer />
        </div>
    }

    let listOfMenuItem = menuData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1];
    // listOfMenuItem?.card.card?.itemCards[0]?.card?.info?.name
    return (
        <div>
            {console.log(" menuData ---",menuData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)}
            {console.log("listOfMenuItem : ",listOfMenuItem?.card)}

            <h1>{menuData[0]?.card?.card.info?.name}</h1>
            <ul>

                
                if(listOfMenuItem?.card.card.hasOwnProperty("categories")){
                    listOfMenuItem?.card.card?.categories[0].itemCards.map(item=>{
                        console.log("Hello :: ",item);
                        return (
                            <li>{item.card?.info?.name} &nbsp;- Rs. {(item.card?.info?.price)/100  }</li>
                        )
                    })
                }else {
                    listOfMenuItem?.card.card?.itemCards.map(item=>{
                        return (
                            <li>{item.card?.info?.name} &nbsp;- Rs. {(item.card?.info?.price)/100  }</li>
                        )
                    }) 
                }
                

                
                
            </ul>
        </div>
    )
}

export default RestaurentMenu;