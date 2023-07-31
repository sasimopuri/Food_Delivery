const RestaurantCategory = ({data}) => {
    return(
        <div className="flex justify-between shadow-lg w-11/12 my-2 p-4 bg-gray-50 font-medium">
            <span>{data?.card?.title} ({data?.card?.itemCards.length})</span>
            <span>⬇️</span>
        </div>
    )
};
export default RestaurantCategory;