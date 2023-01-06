import React, { Component } from 'react';

const ScaleTemp={
    'c': 'Celcius',
    'f': 'Fahrenheit'
}
class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.handlechange=this.handlechange.bind(this);
    }
    handlechange(event){
        this.props.ontempChange(event.target.value);
    }

    render() {
        return (
            <fieldset>
                <legend>Enter the Temperature in {ScaleTemp[this.props.scale]}</legend>
                <input value={this.props.temperature} onChange={this.handlechange}/>
            </fieldset>
        );
    }
}

export default TemperatureInput;