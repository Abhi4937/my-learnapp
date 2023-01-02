import React from 'react';
export default class PostComments extends React.Component{
    constructor(props){
        super(props);
        this.state={
            post: '',
            comments: ''
        };
    }
    componentDidMount(){
        window.fetchPost().then(response=>{
            this.setState((state)=>({
                post: response
            }));
        });
        window.fetchComment().then((response)=>{
            this.setState((state)=>({
                comments: response
            }));
        });
    }
    render(){
        return(
            <div>
                <h3>Post:<span style={{fontWeight:"100"}}>{this.state.post}</span></h3>
                <h3>Comments:<span style={{fontWeight:"100"}}>{this.state.comments}</span></h3>
            </div>
        )
    }
}