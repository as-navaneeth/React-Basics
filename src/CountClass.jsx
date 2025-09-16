
import { Component } from "react";

class Counter extends Component{

    state={
        count:0
    }

    render(){
        return(
            <div>
                <p>Current Count:{this.state.count}</p>
                <button onClick={()=>this.setState({count:this.state.count +1})}>
                    Increase
                </button>
            </div>
        )
    }
}

export default Counter