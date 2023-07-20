import HeaderComponent from "./HeaderComponent";
// import Body from "./Body"
import { Outlet } from "react-router-dom";

const AppLayout = ()=>{
    return (
        <div>
            <HeaderComponent />
            <Outlet />
        </div>
    )
}

export default AppLayout;