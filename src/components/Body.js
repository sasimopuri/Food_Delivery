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

    function handleSearch(){

    }

    return(
        <div className="body-container">
            <button className="toprated-btn" onClick={handleTopRated}>
                {isTopRated?"Show all Restaurants" : "Top Rated Restaurants"}
            </button>
            <div className="search">
                <input type="text" onChange={handleSearch}/>
            </div>
            <div className="res-container">  
                {card}
            </div>
        </div>
    )
}