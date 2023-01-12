import React, { Component } from 'react';
import Lifecycleprop from './lifecycleprop';

class Lifecycle extends Component {
    
    constructor(props){
        super(props);
        this.onhandleSubmit=this.onhandleSubmit.bind(this);
        this.state={
            "name": "Abhishek",
            "surname":"Singh",
            "Age":26
        }
    }
    componentDidMount(){
    }
    componentDidUpdate(preProps,prevState,snapShot){
    }
    componentWillUnmount(){}
    onhandleSubmit(e) {
        this.setState((preState)=>({
            "name": "Anzal",
            "surname":"Shaikh",
            "Age": 24
        }))
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <Lifecycleprop user={this.state}/> 
                <button type="submit" style={{'minWidth':'40px', 'minHeight':'20px'}} onClick={this.onhandleSubmit}>Click me</button>
            </div>
        );
    }
}

export default Lifecycle;