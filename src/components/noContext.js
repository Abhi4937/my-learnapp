import React, { Component } from 'react';
import Toolbar from './Toolbar';

const ThemeContext=React.createContext("dark");
class NoContext extends Component {
    render() {
        return (
                <Toolbar/>
        );
    }
}

export default NoContext;