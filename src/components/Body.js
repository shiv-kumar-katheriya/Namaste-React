import  RestaurentCard from "./RestaurentCard";
import restaurentList from "../utils/resList";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";




const Body = ()=> {
    console.log("Inside body");
    let [res,setRes] =  useState([]);
    let [searchText, setSearchText] = useState("");
    let [displayList, setDisplayList] = useState([]);

    useEffect(()=>{
        console.log("Inside useEffect");
        (async ()=>{
            let json = await fetch("http://localhost:3000/restaurentList");
            json = await json.json()
            setDisplayList(json);
            setRes(json);
            return json;
        })()    
    },[])




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
            <div className="res-container">
                {
                    displayList.map(
                        restaurent =>     <RestaurentCard key={restaurent.id} resData = {restaurent} />
                    )
                }    
            </div>
        </div>
    )
}

export default Body;