
import { Component } from "react";
import Check from './component/checking'

class Counter extends Component{

    state={
        count:0,
        myName:"Navaneeth"
    }

    // componentDidMount(){
    //     this.setState({myName:"React Learner"});
    // }

    render(){
        return(
            <div>
                <p>Current Count:{this.state.count}</p>
                <button onClick={()=>this.setState({count:this.state.count +1})}>
                    Increase
                </button>
                <h1>{this.state.myName}</h1>
                <button onClick={()=>this.setState({myName:"React Learner"})}>Check</button>
                <Check myName={this.state.myName}/>
            </div>
        )
    }
}

export default Counter