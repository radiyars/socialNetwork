import { connect } from 'react-redux';
import { addPost, updateNewPostText } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';


let mapStateToProps = (state) => {
	return {
		profilePage: state.profilePage,
	}
}


const MyPostsContainer = connect(mapStateToProps, { addPost, updateNewPostText, })(MyPosts);

export default MyPostsContainer
