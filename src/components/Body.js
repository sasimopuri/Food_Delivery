import RestroCards from "./RestroCard"
// import { restro_data } from "../utils/restro_data"
import { useEffect, useState } from "react"
import { json } from "react-router-dom"
import Shimmer from "./shimmer"
export default function Body(){
    const [restroData,setRestro_data]=useState([])
    const [isTopRated,setIsTopRated]=useState(true)
    const card=restroData?.map((data)=><RestroCards key={data.data.id} value={data} />)
   console.log(restroData,"restro");

    useEffect(()=>{
        getRestaurants()
    },[])

    async function getRestaurants(){
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9304278&lng=77.678404&page_type=DESKTOP_WEB_LISTING"
        );  
        const json= await data.json();
        // console.log(json);
        const json_data=json?.data?.cards[2]?.data?.data?.cards
        setRestro_data(json_data)
    }   

    function handleTopRated(){
        const topRated_data=restroData.filter((res)=>
            res.data.avgRating>4.2
        )
        setRestro_data(topRated_data)
        setIsTopRated((presTopRated)=>!presTopRated)
        if(isTopRated){
            setRestro_data(json)
        }
        
    }

    function handleSearch(e){
        e.preventDefault();
        console.log();
        const search_value=e.target.value.toLowerCase();
        const search_filter_restrodata=restroData.filter(
            (data)=>data.data.name.toLowerCase().includes(search_value));
        search_filter_restrodata? setRestro_data(search_filter_restrodata) : setRestro_data(restroData)
        

    }

    return (restroData.length===0)? <Shimmer /> : (
        <div className="body-container">
            <div className="filters">
                <div className="toprated-btn-container">
                    <button className="toprated-btn" onClick={handleTopRated}>
                        {isTopRated?"Show all Restaurants" : "Top Rated Restaurants"}
                    </button>
                </div>
                <div className="search">
                    <input type="text" name="text" onChange={handleSearch}/>
                    <button className="search-btn">Search</button>
                </div>
            </div>
            <div className="res-container">  
                {card}
            </div>
        </div>
    )
}