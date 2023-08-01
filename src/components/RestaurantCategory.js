import Restaurant_Items_List from "./Restaurant_Items_Litst";

const RestaurantCategory = ({ data }) => {
    console.log(data);
  return (
    <div className="flex shadow-lg my-2 p-4 bg-gray-50 flex-col">
      <div className="flex justify-between font-medium text-xl pb-2 border-gray-300 border-b-2">
        <span>
          {data?.card?.title} ({data?.card?.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      <div className="flex items-center flex-wrap">
        {data?.card?.itemCards?.map((item)=>(
            <Restaurant_Items_List item={item}/>
        ))}
      </div>
    </div>
  );
};
export default RestaurantCategory;
