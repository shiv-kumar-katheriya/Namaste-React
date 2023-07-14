
import { useRouteError } from "react-router-dom";

const Error = ()=>{
    let err = useRouteError();
    console.log("err is :: ",err);
    return (
        <div>
            This Is Error Page
        </div>
    )
}

export default Error;