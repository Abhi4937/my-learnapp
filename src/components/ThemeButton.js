import React, { Component } from 'react';

class ThemeButton extends Component {
    render() {
        return (
            <div>
                <button theme={this.props.theme}>button</button>
            </div>
        );
    }
}

export default ThemeButton;