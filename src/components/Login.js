import React from 'react'
export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={isToggle:false};
        this.handleToggle=this.handleToggle.bind(this);
    }
    handleToggle(){
        this.setState((preState)=>({
            isToggle: !preState.isToggle
        }));
        const btnId=document.getElementById("btn-id");
        console.log('togglestate:',this.state.isToggle);
        console.log("button",btnId);
        if(this.state.isToggle) btnId.style.backgroundColor="green";
        else btnId.style.backgroundColor="red";
        console.log('togglestate:',this.state.isToggle);
    }
    render(){
        return(
            <button className="on-off" id="btn-id" onClick={this.handleToggle}>
                {this.state.isToggle?'ON':'OFF'}
            </button>
        );
    }

}