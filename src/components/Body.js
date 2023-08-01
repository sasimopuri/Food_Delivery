import RestroCards from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
export default function Body() {
  const [allRestaurantsData, setAllRestaurantsData] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isTopRated, setIsTopRated] = useState(true);
  // console.log(restroData,"restro");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurantsData(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  function handleTopRated() {
    const topRated_data = allRestaurantsData.filter(
      (res) => res.data.avgRating > 4
    );
    setFilteredRestaurants(topRated_data);
    setIsTopRated((prevTopRated) => !prevTopRated);
    if (!isTopRated) {
      setFilteredRestaurants(allRestaurantsData);
    }
  }

  function handleSearch(e) {
    e.preventDefault();
    const search_value = e.target.value.toLowerCase();
    const search_filtered_restaurants = allRestaurantsData.filter((res) =>
      res.info.name.toLowerCase().includes(search_value.toLowerCase())
    );
    setFilteredRestaurants(search_filtered_restaurants);
  }

  if (filteredRestaurants === undefined) {
    console.log("nulll");
  }

  return allRestaurantsData?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filters">
        <div className="toprated-btn-container">
          <button className="toprated-btn" onClick={handleTopRated}>
            {!isTopRated ? "Show all Restaurants" : "Top Rated Restaurants"}
          </button>
        </div>
        <div className="search">
          <input type="text" name="text" onChange={handleSearch} />
          <button className="search-btn">Search</button>
        </div>
      </div>
      {/* <Link>
            <div className="res-container">  
                {card}
            </div>
            </Link> */}
      <div className="res-container">
        {filteredRestaurants?.map((data) => (
          <Link to={"/restaurants/" + data?.info.id}>
            <RestroCards key={data?.info.id} value={data} />
          </Link>
        ))}
      </div>
    </div>
  );
}


// tessssssstttttttttttttttttttttttttttttttttttttttt