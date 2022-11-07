import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';


let mapStateToProps = (state) => {
	return {
		profilePage: state.profilePage,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		updateNewPostText: (text) => dispatch(updateNewPostActionCreator(text)),
		addPost: () => dispatch(addPostActionCreator()),
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer
