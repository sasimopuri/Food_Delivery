import RestroCards from "./RestroCard"
import { useEffect, useState } from "react"
import Shimmer from "./shimmer"
export default function Body(){
    const [allRestaurantsData,setAllRestaurantsData]=useState([])
    const [filteredRestaurants, setFilteredRestaurants ]=useState([])
    const [isTopRated,setIsTopRated]=useState(true)
    const card=filteredRestaurants?.map((data)=><RestroCards key={data.data.id} value={data} />)
    // console.log(restroData,"restro");

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
        setAllRestaurantsData(json_data)
        setFilteredRestaurants(json_data)
    }   

    function handleTopRated(){
        const topRated_data=allRestaurantsData.filter((res)=>
            res.data.avgRating>4
        )
        setFilteredRestaurants(topRated_data)
        setIsTopRated((prevTopRated)=>!prevTopRated)
        if(!isTopRated){
            setFilteredRestaurants(allRestaurantsData)
        }
        
    }


    function handleSearch(e){
        e.preventDefault();
        const search_value=e.target.value.toLowerCase();
        const search_filtered_restaurants=allRestaurantsData.filter(
            (restaurant)=>(restaurant.data.name.toLowerCase().includes(search_value))
            
        )
        setFilteredRestaurants(search_filtered_restaurants)
    }

    return (allRestaurantsData.length===0)? <Shimmer /> : (
        <div className="body-container">
            <div className="filters">
                <div className="toprated-btn-container">
                    <button className="toprated-btn" onClick={handleTopRated}>
                        {!isTopRated?"Show all Restaurants" : "Top Rated Restaurants"}
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