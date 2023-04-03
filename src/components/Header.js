import { logo } from "../utils/constants"
export default function Header(){
    return(
        <>
            <div className="headerBar">
                <div className="logo-container">
                    <img src={logo} alt="logo" />
                </div>
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact Us</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        </>
    )
}