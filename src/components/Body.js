// import Restro_Cards from "./Restro_Card"
import { restro_img } from "../utils/constants"
export default function Body(){
    return(
        <div className="body">
            <div className="search"></div>
            <div className="res-container">
                <div className="res-card">
                    <img src={restro_img+"ue1tt2ujt2ybghd60bs0"} alt="" />
                    <div className="restro-info">
                        <div className="restro-title">Hotel Empire</div>
                        <h4>"North Indian",
    "Kebabs",
    "Biryani"</h4>
                        <h4>"4.1"</h4>
                        <h4>34 MINS</h4>
                        <h4>"₹450 FOR TWO"</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}