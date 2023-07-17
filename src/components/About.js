import User from "./User";
import UserClass from "./UserClass";

import React from "react" 

class About extends React.Component{

    constructor({props}){
        super(props);
        console.log("Inside Parent Constructor");
    }
    
    componentDidMount(){
        console.log("Inside parent  component Did Mount");
    }

    render(){
        console.log("Inside render");
        return(
            (
                <div className="about-card">
                    <UserClass name={"First"} city={"Kanpur Nagar"} />
                </div>
            )
        )
    }


}



// const About = ({props})=>{
//     console.log("Insde about")
//     return (
//         <div className="about-card">
//             <UserClass name={"Shiv Kumar Katheriya"} city={"Kanpur Nagar"} /> 
//         </div>
//     )
// }

export default About;