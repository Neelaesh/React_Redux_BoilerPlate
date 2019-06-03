import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Photo extends React.Component {

    render(){
        console.log("Photo Props ",this.props);
        const post = this.props.post;
        return(
            <figure className="figure">
                <Link to={`/viewPhoto/${post.id}`}><img className="photo" src={post.imageLink} alt={post.description}/></Link>
                <figcaption><p>{post.description}</p></figcaption>
                <div className="button-container">
                    <button onClick={()=>{
                        this.props.removePostsFromDataBase(this.props.index, post.id);
                        this.props.history.push('/');
                    }}>Remove</button>
                    <Link className="button" to={`/viewPhoto/${post.id}`}>
                        <div className="comment-count">
                            <div className="speech-bubble"></div>
                            {this.props.comments[post.id] ? this.props.comments[post.id].length : 0}
                        </div>
                    </Link>
                </div>
            </figure>
        );
    }

}

Photo.propTypes = {
    post : PropTypes.object.isRequired
}

export default Photo;