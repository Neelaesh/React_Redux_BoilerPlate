import { database } from '../Database/config'; 

// Add Post to DataBase
export function addPostToDataBase(post){
    return (dispatch) => {
        return database.ref('posts').update({[post.id]:post}).then(()=>{
            console.log("Post Added");
            dispatch(addPost(post));
        }).catch((error)=>{
            console.log("Error ",error);
        })
    };
}

// Fetch Posts from DataBase
export function loadPostsFromDataBase(){
    return (dispatch) => {
        return database.ref('posts').once('value').then((snapshot)=>{
            let posts = [];
            snapshot.forEach((childSnapshot)=>{
                posts.push(childSnapshot.val());
            });
            dispatch(loadPosts(posts));
        }).catch((error)=>{
            console.log("Error ",error);
        })
    }
}

// Remove Posts from DataBase
export function removePostsFromDataBase(index, id){

    // Code to remove both post and comments
    let updates ={
        [`posts/${id}`] : null,
        [`comments/${id}`] : null
    }  // this specifies the paths that we want to update to null (basically delete)
    return (dispatch) => {
        console.log(`${index} ${id}`)
        return database.ref().update(updates).then(()=>{
            console.log("Post Removed");
            dispatch(removePost(index));
        }).catch((error)=>{
            console.log("Error ",error);
        })
    }

    // Code to remove post alone
    /* return (dispatch) => {
        console.log(`${index} ${id}`)
        return database.ref(`posts/${id}`).remove().then(()=>{
            console.log("Post Removed");
            dispatch(removePost(index));
        }).catch((error)=>{
            console.log("Error ",error);
        })
    } */
}

// Add Comments to DataBase
export function addCommentToDataBase(comment, postId){
    return (dispatch) => {
        return database.ref(`comments/${postId}`).push(comment).then(()=>{
            console.log("Comment Added");
            dispatch(addComment(comment, postId));
        }).catch((error)=>{
            console.log("Error ",error);
        })
    }
}

// Fetch Comments from DataBase
export function loadCommentsFromDataBase(comments){
    return (dispatch) => {
        return database.ref('comments').once('value').then((snapshot) => {
            let comments = {};
            snapshot.forEach((childSnapshot)=>{
                comments[childSnapshot.key] = Object.values(childSnapshot.val());
            });
            dispatch(loadComments(comments));
        })
    }
}

// Remove Post
export function removePost(index){
    return{
        type: 'REMOVE_POST',
        index
    }
}
// Add Post
export function addPost(post){
    return{
        type: 'ADD_POST',
        post
    }
}
// Add Comment
export function addComment(comment, postId){
    return{
        type: 'ADD_COMMENT',
        comment,
        postId
    }
}

// Load Posts
export function loadPosts(posts){
    return {
        type: 'LOAD_POSTS',
        posts
    }
}

// Load Comments
export function loadComments(comments){
    return {
        type: 'LOAD_COMMENTS',
        comments
    }
}

/* export function add(){
    addComment();
    addPost();
} */