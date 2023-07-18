import { useEffect, useState } from "react";
import { RestaurentIdURL } from "../utils/resImg"



const useRestaurentInfo = (resId)=>{

    const [resInfo,setResInfo] = useState([]);

    useEffect(()=>{
        fetchData(resId);
    },[]);

    const fetchData =async (id)=>{
        const data =await fetch(RestaurentIdURL+id);
        const json =await data.json();
        setResInfo(json.data.cards);
    }

    return resInfo;
}

export default useRestaurentInfo;