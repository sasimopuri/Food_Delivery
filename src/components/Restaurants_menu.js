import { useEffect, useState } from "react";
import { restro_menu } from "../utils/constants";
import { useParams } from "react-router-dom";

const Restaurantsmenu=()=>{
    const {id}=useParams();

    const [restaurantMenu,setRestaurantsMenu]=useState(null)
    useEffect(()=>{
        getRestaurantsMenu()
    },[])

    async function getRestaurantsMenu(){
        const apiresult=await fetch(
            restro_menu+id
        )
        const data=await apiresult.json();
        const result =  data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
        setRestaurantsMenu(result)
    }

    const menuItem=restaurantMenu?.map((item)=>(
        <h1 key={item?.card?.info?.id}>{item?.card?.info?.name}</h1>))

    return(
        <>
            {menuItem}
        </>
    )
}

export default Restaurantsmenu;