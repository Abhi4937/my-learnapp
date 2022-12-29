// class component requires importing react
import React from 'react';
export default class Clock extends React.Component{
    render(){
        return(
            <div>
                <h2>date: {this.props.date}</h2>
            </div>
        )
    }
}
