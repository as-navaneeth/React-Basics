
import { Component } from "react";

class Check extends Component{
    render(){
        return(
            <div>
                <p>Just Checking how it works</p>
                <h1>{this.props.myName}</h1>   
            </div>
        )
    }
}

export default Check 


//props is properties , which is used to pass data from a parent 