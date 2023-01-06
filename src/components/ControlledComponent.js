import React, { Component } from 'react';

class ControlledComponent extends Component {
    constructor(props){
        super(props);
        this.handleonsubmit=this.handleonsubmit.bind(this);
        this.handleonchange=this.handleonchange.bind(this);
        this.state={
            textValue: "this is default text value type to change it",
            textAreaValue: "this is textarea value type a para",
            selectValue: "orange"
        }
    }
    handleonchange(event){
        this.setState((state)=>({[event.target.name]:event.target.value}))
    }    

    handleonsubmit(event){
        event.preventDefault();
        alert("your fav fruit is:"+this.state.selectValue);
    }


    render() {
        return (
            <div>
                <form className="form1" onSubmit={this.handleonsubmit}>
                    <fieldset className='fs1'>
                    <legend>MY Form:</legend>
                    <label htmlFor="text-id">Text Box:</label>
                    <input type="text" name="textValue" id="text-id" value={this.state.textValue} onChange={this.handleonchange}/>
                    <label htmlFor="textarea-id">Text Area:</label>
                    <textarea id="textarea-id" name="textAreaValue" value={this.state.textAreaValue} onChange={this.handleonchange}/>
                    <label>Select you fav fruit</label>
                    <select name="selectValue" value={this.state.selectValue} onChange={this.handleonchange}>
                        <option value="grapefruit">grapefruit</option>
                        <option value="orange">orange</option>
                        <option value="mango">mango</option>
                        <option value="jackfruit">jackfruit</option>
                    </select>
                    <button type="submit">Submit</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default ControlledComponent;