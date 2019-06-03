import React from 'react';
import Photo from './Photo';
import Comment from './Comment';

export default class ViewPhoto extends React.Component{

    render(){
        const {match, posts} = this.props;
        const id = Number(match.params.id);
        const post = posts.find((post)=>post.id === id);
        const comments = this.props.comments[match.params.id] || [];
        console.log("Post Props ",this.props);
        console.log("Comments Props ",comments);
        console.log("ID ",id);
        console.log("Post ",post);
        const index = posts.findIndex((post)=> post.id === id);
        if(this.props.loading === true){
            return <div className="loader">...Loading</div>
        }
        else if(post!==undefined){
            return <div className="single-photo">
                        <Photo post={post} {...this.props} index={index}></Photo>
                        <Comment addCommentToDataBase={this.props.addCommentToDataBase} comments={comments} id={id}></Comment>
                    </div>
        }
        else{
            return <h1>...Post Not Found</h1>
        }
    }

}