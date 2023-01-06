import React, { Component } from 'react';

class ControlledComponent extends Component {
    constructor(props){
        super(props);
        this.handleonsubmit=this.handleonsubmit.bind(this);
        this.handleonchangetext=this.handleonchangetext.bind(this);
        this.handleonchangetextArea=this.handleonchangetextArea.bind(this);
        this.handleonchangeSelect=this.handleonchangeSelect.bind(this);
        this.state={
            textValue: "this is default text value type to change it",
            textAreaValue: "this is textarea value type a para",
            selectValue: "orange"
        }
    }
    handleonchangetext(event){
        this.setState((state)=>({textValue:event.target.value}));
    }
    handleonchangetextArea(event){
        this.setState((state)=>({textAreaValue:event.target.value}));
    }
    handleonsubmit(event){
        event.preventDefault();
        alert("your fav fruit is:"+this.state.selectValue);
    }

    handleonchangeSelect(event){
        this.setState((state)=>({selectValue : event.target.value}));
    }

    render() {
        return (
            <div>
                <form className="form1" onSubmit={this.handleonsubmit}>
                    <fieldset className='fs1'>
                    <legend>MY Form:</legend>
                    <label htmlFor="text-id">Text Box:</label>
                    <input type="text" id="text-id" value={this.state.textValue} onChange={this.handleonchangetext}/>
                    <label htmlFor="textarea-id">Text Area:</label>
                    <textarea id="textarea-id" value={this.state.textAreaValue} onchange={this.handleonchangetextArea}/>
                    <label>Select you fav fruit</label>
                    <select value={this.state.selectValue} onChange={this.handleonchangeSelect}>
                        <option value="grapefruit">grapefruit</option>
                        <option value="orange">orange</option>
                        <option value="mango">orange</option>
                        <option value="jackfruit">orange</option>
                    </select>
                    <button type="submit">Submit</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default ControlledComponent;