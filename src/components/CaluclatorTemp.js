import React, { Component } from 'react';
import BoilingVerdict from './BoilingVerdict';

class CaluclatorTemp extends Component {
    constructor(props) {
        super(props);
        this.state={
            temperature:''
        };
        this.handlechange=this.handlechange.bind(this);
    }
    handlechange(event){
        this.setState((state)=>({
            temperature: event.target.value
        }))
    }

    render() {
        return (
            <div>
                <label>Enter the temperature in celcius: </label>
                <input value={this.state.temperature} onChange={this.handlechange}/>
                <BoilingVerdict celcius={parseFloat(this.state.temperature)}/>
            </div>
        );
    }
}

export default CaluclatorTemp;