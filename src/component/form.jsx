import React from "react";
class PostForm extends React.Component{
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render(){
        return (
            <form method="POST" action="http://192.168.1.226:3001/"></form>
        )
    }
}