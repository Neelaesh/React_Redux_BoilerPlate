import React from 'react';

export default class AddPhoto extends React.Component {

    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);    
    }

    handleSubmit(event){
        event.preventDefault();
        const imageLink = event.target.elements.imageLink.value;
        const description = event.target.elements.description.value;
        const post = {
            id : Number(new Date()),
            imageLink,
            description
        }
        if(imageLink && description){
            this.props.addPostToDataBase(post);
            this.props.history.push('/');
        }
    }

    render(){
        return(
            <div>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link" name="imageLink"/>
                        <input type="text" placeholder="Description" name="description"/>
                        <button>Post</button>
                    </form>    
                </div>    
            </div>
        )
    }
}