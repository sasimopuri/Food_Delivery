import Restro_Cards from "./Restro_Card"
import { restro_img } from "../utils/constants"
import { restro_data } from "../utils/restro_data"
export default function Body(){
    const card=restro_data?.map((data)=><Restro_Cards key={data.id} value={data.data} />)
    // console.log("s",card);
    return(
        <div className="body">
            <div className="search"></div>
            <div className="res-container">  
                {card}
            </div>
        </div>
    )
}