import { useState } from "react";
import Restaurant_Items_List from "./Restaurant_Items_Litst";

const RestaurantCategory = ({ data }) => {
  const [showMenuItems,setShowMenuItems]=useState(false)
  
  const handleAccordion=()=>{
    setShowMenuItems(prev=>(!prev))
  }

  return (
    <div className="flex shadow-lg my-2 p-4 w-full bg-gray-50 flex-col border-2">
      <div className="flex justify-between font-medium text-xl pb-2 " onClick={handleAccordion}>
        <span>
          {data?.card?.title} ({data?.card?.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      <div className="flex items-center flex-wrap">
        {data?.card?.itemCards?.map((item) => (
          showMenuItems && <Restaurant_Items_List item={item} />
        ))}
      </div>
    </div>
  );
};
export default RestaurantCategory;
