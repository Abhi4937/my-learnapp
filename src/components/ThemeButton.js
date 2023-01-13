import React, { Component } from 'react';
import { ThemeContext } from './Context';
class ThemeButton extends Component {
    static contextType = ThemeContext;
    render() {
        return (
            <div>
                <button theme={this.context}>button</button>
            </div>
        );
    }
}

export default ThemeButton;