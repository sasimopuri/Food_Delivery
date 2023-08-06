import { useSelector } from "react-redux"
import { logo } from "../utils/constants"
import { Link } from "react-router-dom"
export default function Header(){
    const cartItems=useSelector((store)=>store.cart.items)
    console.log(cartItems);
    return(
        <>
            <div className="headerBar">
                <div className="logo-container">
                    <img src={logo} alt="logo" />
                </div>
                <div className="nav-items">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li>Contact Us</li>
                        <li>{`Cart[${cartItems.length}]`}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}