import { restro_img } from "../utils/constants";
export default function Restro_Cards(props){
    console.log(props.value);
    const value=props.value
    return(
        <>
            <div className="res-card">
                    <img src={restro_img+value.cloudinaryImageId} alt="" />
                    <div className="restro-info">
                        <h3 className="restro-title">{value.name}</h3>
                        <h4>{value.cuisines.join(", ")}</h4>
                        <h4>{value.avgRating}</h4>
                        <h4>{value.deliveryTime+" Mins"}</h4>
                        <h4>{value.costForTwoString}</h4>
                    </div>
                </div>
        </>
    )
}