const Restaurant_Items_List=(props)=>{
    const item=props.item;
    const itemInfo=item?.card?.info
    return(
        <div className="flex items-center w-full justify-between">
            <div className="flex flex-col border-2 border-green-500">
                <div className="w-0.5">{itemInfo?.itemAttribute?.vegClassifier==="NONVEG"? "🌲" : "🍗"}</div>
                <div className="font-bold">{itemInfo?.name}</div>
                <div className="text-base">₹{itemInfo?.price/100}</div>
                <div className="text-sm font-light">{itemInfo?.description}</div>
            </div>
            <div className="w-20 h-20 border-2 border-red-300"></div>
        </div>
    )
}
export default Restaurant_Items_List;