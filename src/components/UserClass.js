import React from "react";


class UserClass extends React.Component{
    constructor(props){
        console.log(props.name + " Inside child constructor");
        super(props)
        
        this.state = {
            count : 0,
            count1 : 1,
            count2 : 2
        } 

    }


    componentDidMount(){
        console.log( this.props.name + "Inside child componentDidMount ")
    }

    render(){
        console.log( this.props.name + "Inside child render");
        return(
            <div>
                <h1>Name : {this.props.name}</h1>
                <h2>City : {this.props.city}</h2>


                <h2>
                   Count :  {this.state.count}
                </h2>
                <h2>
                    Count1 :  {this.state.count1}
                </h2>
                <h2>
                   Count2 :  {this.state.count2}
                </h2>

                <div>
                    <button onClick={()=>{
                        console.log("--- :: ",this.state.count1,this.state.count2)
                        this.setState({
                            count  : this.state.count + 1
                        })
                    }}>Click here!</button>
                </div>
            </div>
        )
    }
}

export default UserClass;