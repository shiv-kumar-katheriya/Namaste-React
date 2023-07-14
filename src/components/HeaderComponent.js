import { Link } from "react-router-dom";
import { appLogo } from "../utils/resImg"

const HeaderComponent = () => (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={appLogo} />
        </div>
        <div className="nav-items">
            <ul className="nav-list-items">
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/about"}>About</Link>
                </li>
                <li>
                    <Link to={"/contact"}>Contact Us</Link>
                </li>
                <li>
                    <Link to={"/Cart"}>Cart</Link>
                </li>
            </ul>
        </div>
    </div>
)


export default HeaderComponent;