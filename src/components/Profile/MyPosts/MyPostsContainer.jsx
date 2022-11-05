import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';


function MyPostsContainer(props) {
	// debugger;
	let state = props.store.getState();

	let addPost = () => {
		props.store.dispatch(addPostActionCreator());
	}

	let onPostChange = (text) => {
		props.store.dispatch(updateNewPostActionCreator(text));
	}

	return <MyPosts
		updateNewPostText={onPostChange}
		addPost={addPost}
		posts={state.profilePage.posts}
		newPostText={state.profilePage.newPostText} />

}


export default MyPostsContainer
