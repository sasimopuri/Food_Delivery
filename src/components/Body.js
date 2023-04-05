import RestroCards from "./RestroCard"
import { restro_data } from "../utils/restro_data"
import { useState } from "react"
export default function Body(){
    const [restroData,setRestro_data]=useState(restro_data)
    const [isTopRated,setIsTopRated]=useState(true)
    const card=restroData?.map((data)=><RestroCards key={data.data.id} value={data} />)
   
    function handleTopRated(){
        const topRated_data=restroData.filter((res)=>
            res.data.avgRating>4.2
        )
        setRestro_data(topRated_data)
        setIsTopRated((presTopRated)=>!presTopRated)
        if(isTopRated){
            setRestro_data(restro_data)
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

    return(
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