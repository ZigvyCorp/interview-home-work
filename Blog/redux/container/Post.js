import {connect} from 'react-redux'
import Post from '../../screen/post'
import {fetchData, Getdata } from '../reducers'
import axios from 'axios';


const mapStateToProps = (state) => {
  return{
    todos: state.todo.item
  }
};

const mapActionsToProps = (dispatch) =>({
  Getdata : (items) => dispatch(Getdata(items)),
  fetchData: () =>dispatch(fetchData())
});

export default connect(mapStateToProps,mapActionsToProps)(Post);