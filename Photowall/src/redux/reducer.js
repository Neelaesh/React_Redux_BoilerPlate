import _posts from '../data/posts';
import {combineReducers} from 'redux';

function comments(state={}, action){
    console.log("Comment Reducer");
    switch(action.type){
        case 'ADD_COMMENT' :
                console.log("ADD_COMMENT ",action);  
                if(!state[action.postId]){
                     return {...state, [action.postId]:[action.comment]} // can also use '' for action.postId
                }
                else{
                     return {...state, [action.postId]:[...state[action.postId], action.comment]}   
                }
        case 'LOAD_COMMENTS' :
                return action.comments
        default :
                return state;
    }
}

function posts(state = _posts, action){
    console.log("Post Reducer");
    switch(action.type){
        case 'REMOVE_POST' : 
                return [...state.slice(0, action.index), ...state.slice(action.index+1)]
        case 'ADD_POST' :
                return [...state, action.post]
        case 'LOAD_POSTS' :
                return action.posts
        default :
                return state;
    }   
}

const rootReducer = combineReducers({comments, posts});

export default rootReducer;