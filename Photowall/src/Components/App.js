import { connect } from 'react-redux';
import Main from '../Components/Main';
//import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions';
import {withRouter} from 'react-router-dom';
//import { removePost } from '../redux/actions';

const mapStateToProps = (state) => {
    return{
        posts : state.posts,
        comments : state.comments
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({removePost}, dispatch);
// }

//const App = connect(mapStateToProps, {removePost})(Main);
const App = connect(mapStateToProps, actions)(Main);

export default withRouter(App);