import { useState } from "react";
import Restaurant_Items_List from "./Restaurant_Items_Litst";

const RestaurantCategory = ({ data, showMenuItems, setShowIndex }) => {
  return (
    <div
      className="flex shadow-lg my-2 p-4 w-full bg-gray-50 flex-col border-2"
      onClick={() => setShowIndex()}
    >
      <div className="flex justify-between font-medium text-xl pb-2 ">
        <span>
          {data?.card?.title} ({data?.card?.itemCards.length})
        </span>
        {showMenuItems ? <span>⬆️</span> : <span>⬇️</span>}
      </div>
      <div className="flex items-center flex-wrap">
        {data?.card?.itemCards?.map(
          (item) => showMenuItems && <Restaurant_Items_List item={item} />
        )}
      </div>
    </div>
  );
};
export default RestaurantCategory;
