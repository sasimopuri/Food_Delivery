import { restro_img } from "../utils/constants";
export default function RestroCards(props){
    const {cloudinaryImageId,name,cuisines,avgRating,deliveryTime,costForTwoString}=props.value?.info
    return(
        <>
            <div className="res-card">
                <img src={restro_img+cloudinaryImageId} alt="" />
                <div className="restro-info">
                    <h3 className="restro-title">{name}</h3>
                    <h4>{cuisines.join(", ")}</h4>
                    <h4>{avgRating}</h4>
                    <h4>{deliveryTime+" Mins"}</h4>
                    <h4>{costForTwoString}</h4>
                </div>
            </div>
        </>
    )
}