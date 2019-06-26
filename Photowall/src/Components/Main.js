import React from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import {Route, Link} from 'react-router-dom';
//import { connect } from 'react-redux';
import ViewPhoto from './ViewPhoto';

class Main extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            title : 'PhotoWall',
            loading : true,
            posts : []
        }
    }

    componentDidMount(){
        console.log("Inside Main Component");
        this.props.loadPostsFromDataBase().then(()=>{
            this.setState({
                loading : false
            })
        });
        this.props.loadCommentsFromDataBase();
    }

    render(){
        //console.log("Main ",this.props.posts);
        return(
            <div>
                <h1><Link to="/"><Title title={this.state.title}></Title></Link></h1>
                <Route exact path="/" render={()=>(
                    <div>
                    <PhotoWall {...this.props}></PhotoWall>
                    </div>
                )}/>
                <Route path="/addPhoto" render={({history})=>(
                    <AddPhoto {...this.props} ></AddPhoto>
                )}/>
                <Route path="/viewPhoto/:id" render={(params)=>(
                    <ViewPhoto loading={this.state.loading} {...this.props} {...params}></ViewPhoto>
                )}/>
            </div>
        );
    }

}

/* const mapStateToProps = (state) => {
    return {
        posts : state
    }
} */

// export default connect(mapStateToProps)(Main);

export default Main;