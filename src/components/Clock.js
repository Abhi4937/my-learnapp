// class component requires importing react
import React from 'react';
export default class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={date: new Date()}
    }
    componentDidMount(){
        this.TimerID=setInterval(
            ()=>this.tick(),
            1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.TimerID);
    }
    tick(){
        this.setState({date: new Date()});
    }

    render(){
        return(
            <div>
                <h2>date: {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

