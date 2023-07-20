
import {restaurantCardImg} from "../utils/resImg"


const RestaurentCard = (props)=>{

    const {name,cuisines,avgRating,cloudinaryImageId,costForTwo,id} = props.resData?.data;

    return (
        <div className="rounded-lg m-2 p-6 w-72 bg-slate-400  max-h-fit hover:text-zinc-50 hover:bg-zinc-900">
            <img className="rounded-lg" src={restaurantCardImg + cloudinaryImageId} alt="res-logo"/>
            <h3 className="text-xl font-bold py-2">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Star</h4>
            <h4>{costForTwo/100} For 2</h4>
            <h4>{id}</h4>
        </div>
    )
}


export const withPromotedLabel = (RestaurentCard)=>{
    return (props)=>{
        return (
            <div>
                <label className="absolute bg-orange-800 text-gray-50 px-2 mx-2  rounded-lg font-bold">Promoted</label>
                <RestaurentCard  {...props} />
            </div>
        )
    }
}


export default RestaurentCard;



