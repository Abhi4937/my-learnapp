import React, { Component } from 'react';


class Lifecycleprop extends Component {
    
    constructor(props){
        console.log("Insidle lifecycle class:");
        super(props);
        console.log("this.props=> ",this.props);
        this.state={
            "name": "Esha",
            "surname":"Sukhdeve",
            "Age":26
        }
        console.log("this.state=> ",this.state);
        console.log("--------------------------------");
    }
    componentDidMount(){
        console.log("Inside componentDidMount() lifecycle method:");
        console.log("--------------------------------");
    }
    componentDidUpdate(prevProps,prevState,snapShot){
        console.log("inside componentDidUpdate() lifecycle:");
        console.log("prevState=> ",prevState);
        console.log("prevProps==this.props",prevProps===this.props);
        console.log("this.prevProps:",prevProps);
        console.log("prevState===this.state", prevState===this.state);
        console.log("--------------------------------");
    }
    componentWillUnmount(){
        console.log("inside componentWillUnmount() lifecycle:");
        console.log("--------------------------------");
    }

    render() {
        console.log("Inside render() lifecycle");
        return (
            <div>
                 <p>This is rendered output:<br/>{JSON.stringify(this.state)}</p>
                 <p>This is rendered output:<br/>{JSON.stringify(this.props.user)}</p>
                 <form>
                    <label>Name:</label>
                    <input type='text' value={this.props.user.name}/>
                    <label>Surname:</label>
                    <input type='text' value={this.props.user.surname}/>
                    <label>Age:</label>
                    <input type='number'value={this.props.user.Age}/>
                 </form>
            </div>
        );
    }
}

export default Lifecycleprop;