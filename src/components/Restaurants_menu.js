import { useEffect, useState } from "react";
import { restro_menu } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurants";
import Shimmer from "./shimmer";
import RestaurantCategory from "./RestaurantCategory";

const Restaurantsmenu = () => {
  const { id } = useParams();
  const resInfo = useRestaurantMenu(id);
  if (resInfo === null || resInfo === undefined) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[0]?.card?.card?.info;
  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (res) =>
        res?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);
  return (
    <>
      <div className="w-6/12 flex items-center mx-auto flex-col">
        <h1 className="text-2xl my-5 font-bold">{name}</h1>
        <p className="text-base font-bold">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        {categories.map((card) => (
          <RestaurantCategory data={card?.card} />
        ))}
      </div>
    </>
  );

  // const menuItem = resInfo?.map((item) => (
  //   <h1 key={item?.card?.info?.id}>{item?.card?.info?.name}</h1>
  // ));

  // return <>{menuItem}</>;
};

export default Restaurantsmenu;
