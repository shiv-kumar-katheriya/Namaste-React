import  RestaurentCard from "./RestaurentCard";
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
        
        <div className="body">
            <div className="search">

                <div>
                    <input  type="text" value={searchText} onChange ={
                        (e)=>setSearchText(e.target.value)
                    } />
                </div> 
                <div>
                    <button className="searchBtn" onClick={
                        ()=>{
                            filteredList =   res.filter(item => {
                                return item.data.name.toLowerCase().includes(searchText.toLowerCase())
                            })
                            console.log("filteredList is :: ",filteredList);
                            setDisplayList(filteredList);
                        }
                        
                    }>Search</button>
                </div>

                <div>
                    <button className="filter-btn" onClick={()=>{
                        filterResList = res.filter(restra => restra.data.avgRating > 4)
                        console.log("res is : ",res);
                        setDisplayList(filterResList);
        
                    }} >Filter</button>
                </div>
            </div>
            {/* {console.log("restaurent :: ",displayList)} */}
            <div className="res-container">
                {
                    displayList.map(
                        restaurent =>     <Link  to={"/restaurent/"+restaurent.data.id} key={restaurent.id}> <RestaurentCard  resData = {restaurent} /> </Link>
                    )
                }    
            </div>
        </div>
    )
}

export default Body;