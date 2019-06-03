import React from 'react';

export default class Comment extends React.Component {

    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const comment = e.target.elements.comment.value;
        console.log("Comment ",comment);
        this.props.addCommentToDataBase(comment, this.props.id);
        e.target.elements.comment.value = '';
    }

    render(){
        console.log("Comment Props ",this.props.comments);
        return (
            <div className="comment">
                {
                    this.props.comments.map((comment, index)=>{
                        return (
                        <p key={index}>{comment}</p>
                        )
                    })
                }
                <form className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Comment" name="comment"/><br/>
                    <input type="submit" value="Post Comment"/>
                </form>
            </div>
        )
    }

}