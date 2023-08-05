import { restro_img } from "../utils/constants";

const Restaurant_Items_List=(props)=>{
    const item=props.item;
    const itemInfo=item?.card?.info
    return(
        <div className="flex items-center w-full justify-between gap-1mb-2 border-b-2 border-b-gray-300 mt-2">
            <div className="flex flex-col w-11/12 p-1">
                <div className="w-0.5">{itemInfo?.itemAttribute?.vegClassifier==="NONVEG"? "🌲" : "🍗"}</div>
                <div className="font-bold">{itemInfo?.name}</div>
                <div className="text-base">₹{itemInfo?.price/100}</div>
                <div className="text-sm font-light">{itemInfo?.description}</div>
            </div>
            <div className="relative">
                <img className="w-40 border-0 rounded-md" src={restro_img+itemInfo?.imageId} alt="" />
                <button className="absolute top-16 bg-gray-50 ml-4 rounded-sm shadow-sm shadow-gray-100 border border-gray-300 w-3/4 ">Add</button>
            </div>
        </div>
    )
}
export default Restaurant_Items_List;