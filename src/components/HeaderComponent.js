import { appLogo } from "../utils/resImg"

const HeaderComponent = () => (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={appLogo} />
        </div>
        <div className="nav-items">
            <ul className="nav-list-items">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)


export default HeaderComponent;