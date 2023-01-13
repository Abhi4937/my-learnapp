import React, { Component } from 'react';
import { ThemeContext } from './Context';
class Header extends Component {
    render() {
        return (
            <div>
                <ThemeContext.Consumer>
                    {value=> <button theme={this.value}/>}
                </ThemeContext.Consumer>
            </div>
        );
    }
}

export default Header;