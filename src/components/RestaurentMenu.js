
import useRestaurentInfo from "../utils/useRestaurentInfo";
import RestaurentCategories from "./RestaurentCategories";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import { useState } from "react";

const RestaurentMenu = ()=>{
    
    const [showIndex,setShowIndex] = useState(0);
    const [bool,setBool] = useState(2);

    const param = useParams();
    const menuData  =  useRestaurentInfo(param?.resId);
    
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
    // let listOfMenuItem = menuData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1];
    let listOfMenuItem =  menuData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(cardItem => {
        return cardItem?.card.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })
    return (
        <>
        <div className="flex justify-center mt-8  bg-slate-500">
            <div className="f justify-center">
                <h1 className="text-xl font-bold">{menuData[0].card.card.info.name}</h1>
                <h2 className="text-lg font-bold">{menuData[0].card.card.info.cuisines}</h2>
            </div>
        </div>
        <div className="mx-auto w-6/12">
            {
             
                listOfMenuItem?.map((item,index)=>{
                    return <RestaurentCategories toggle={index==showIndex}  setShowIndex={()=>setShowIndex(index)}  key={item.card.card.title} data={item?.card?.card} />
                })
            }
        </div>
        </>
    )
}

export default RestaurentMenu;