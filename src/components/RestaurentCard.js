
import {restaurantCardImg} from "../utils/resImg"


const RestaurentCard = (props)=>{

    const {name,cuisines,avgRating,cloudinaryImageId,costForTwo,id} = props.resData?.data;

    return (
        <div className="res-card" style={{    backgroundColor: "aqua"}}>
            <img className="res-logo" src={restaurantCardImg + cloudinaryImageId} alt="res-logo"/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Star</h4>
            <h4>{costForTwo/100} For 2</h4>
            <h4>{id}</h4>
        </div>
    )
}

export default RestaurentCard;