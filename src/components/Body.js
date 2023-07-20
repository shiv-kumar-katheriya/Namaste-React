import  RestaurentCard, {withPromotedLabel} from "./RestaurentCard";
import restaurentList from "../utils/resList";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";




const Body = ()=> {
    let [res,setRes] =  useState([]);
    let [searchText, setSearchText] = useState("");
    let [displayList, setDisplayList] = useState([]);

    useEffect(()=>{
        (async ()=>{
            let json = await fetch("http://localhost:3000/restaurentList");
            json = await json.json()
            setDisplayList(json);
            setRes(json);
            return json;
        })()    
    },[])

    const onlineStatus = useOnlineStatus();

    const PromotedRestaurentCard = withPromotedLabel(RestaurentCard);

    if(!onlineStatus) {
        return <h1>You Are Not Connected With Internet Try reconnecting with the Internet</h1>
    }


    if(res.length === 0){
        return (
            <div className="shimmer-container">
            <Shimmer /></div>
        )
    }
    
    return (
        
        <div className="py-4">
            <div className="flex justify-start px-40">

                <div className="my-2 px-2">
                    <input className="border border-black px-4 py-1 rounded-md" type="text" value={searchText} onChange ={
                        (e)=>setSearchText(e.target.value)
                    } />
                </div> 
                <div className="my-2 px-2">
                    <button className="border-spacing-6 px-4 py-1 rounded-lg hover:text-gray-100 bg-indigo-700 text-lg font-bold " onClick={
                        ()=>{
                            filteredList =   res.filter(item => {
                                return item.data.name.toLowerCase().includes(searchText.toLowerCase())
                            })
                            console.log("filteredList is :: ",filteredList);
                            setDisplayList(filteredList);
                        }
                        
                    }>Search</button>
                </div>

                <div className="my-2 px-2">
                    <button className="border-spacing-6 px-4 py-1 rounded-lg hover:text-gray-100 bg-pink-500 text-lg font-bold "  onClick={()=>{
                        filterResList = res.filter(restra => restra.data.avgRating > 4)
                        console.log("res is : ",res);
                        setDisplayList(filterResList);
        
                    }} >Filter</button>
                </div>
            </div>
            {/* {console.log("restaurent :: ",displayList)} */}
            <div className="flex flex-wrap px-4 justify-center">
                {
                    displayList.map(
                        restaurent =>     
                            <Link  to={"/restaurent/"+restaurent.data.id} key={restaurent.data.id}> 
                                { restaurent.data.promoted ? <PromotedRestaurentCard  resData = {restaurent} />  : <RestaurentCard  resData = {restaurent} /> }    
                            </Link>
                    )
                }    
            </div>
        </div>
    )
}

export default Body;