
import useRestaurentInfo from "../utils/useRestaurentInfo";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurentMenu = ()=>{
    
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

    let listOfMenuItem = menuData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1];
    return (
        <div>
            <h1>{menuData[0]?.card?.card.info?.name}</h1>
            <ul>
                { displayData(listOfMenuItem) }    
            </ul>
        </div>
    )
}

export default RestaurentMenu;