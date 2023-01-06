import React from 'react';
import Greeting from './ConditionalGreeting';
import {Login, Logout} from './LoginLogout';

export default class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.handlelogin=this.handlelogin.bind(this);
        this.handlelogout=this.handlelogout.bind(this);
        this.state={isLoggedin: false};
    }
    handlelogin(){
        this.setState((state)=>({isLoggedin: true}));
    }
    handlelogout(){
        this.setState((state)=>({isLoggedin: false}));
    }
    render(){
        const isLoggedin=this.state.isLoggedin;
        let button;
        if(!isLoggedin){ button=<Login onClick={this.handlelogin}/>}
        else{ button = <Logout onClick={this.handlelogout}/>}
    return(
        <div>
        <Greeting isLogged={isLoggedin}/>
        {button}
        </div>
    )
    }
}