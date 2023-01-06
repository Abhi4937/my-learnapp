import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';
class CaluclatorTemp extends Component {
    constructor(props) {
        super(props);
        this.state={temperature:'', scale:'c'};
        this.handleCelcius=this.handleCelcius.bind(this);
        this.handleFahrenheit=this.handleFahrenheit.bind(this);
    }
    handleCelcius(temperature){
        this.setState((state)=>({scale:'c', temperature}));
    }

    handleFahrenheit(temperature){
        this.setState((state)=>({scale:'f', temperature}));
    }

    render(){
        const scale=this.state.scale;
        const temperature=this.state.temperature;
        const celcius = scale==='f'? tryConvert(temperature,toCelcius) : temperature;
        const fahrenheit = scale==='c'? tryConvert(temperature,toFahreheit) : temperature;
        return(
            <div className='temp-fc'>
                <TemperatureInput scale='c' temperature={celcius} ontempChange={this.handleCelcius}/>
                <TemperatureInput scale='f' temperature={fahrenheit} ontempChange={this.handleFahrenheit}/>
             </div>
        )
    }
}

function tryConvert(temp,convert){
    const input=parseFloat(temp);
    if(Number.isNaN(input)) return '';
    const output=convert(input);
    const round=Math.round(output*1000)/1000;
    return output.toString();
}

function toCelcius(fahrenheit){
    return (fahrenheit-32)*5/9;
}
function toFahreheit(celcius){
    return (celcius*9/5)+32;
}
export default CaluclatorTemp;