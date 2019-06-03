import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

export default class PhotoWall extends React.Component {
    
    render(){
        return(
            <div>
                <NavLink className="addIcon" to="/addPhoto"></NavLink>
                <div className="photoGrid">
                    {this.props.posts
                    .sort( (x,y) => y.id - x.id)
                    .map( (post,index) => {
                        return (<Photo key={post.id} index={index} post={post} {...this.props}></Photo>)
                    })}
                </div>
            </div>
        );
    }

}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired
}