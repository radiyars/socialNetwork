import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profileReducer';
import StoreContext from '../../../storeContext';
import MyPosts from './MyPosts';


function MyPostsContainer() {

	return (
		<StoreContext.Consumer>
			{
				(store) => {
					let state = store.getState();

					let addPost = () => {
						store.dispatch(addPostActionCreator());
					}

					let onPostChange = (text) => {
						store.dispatch(updateNewPostActionCreator(text));
					}

					return <MyPosts
						updateNewPostText={onPostChange}
						addPost={addPost}
						posts={state.profilePage.posts}
						newPostText={state.profilePage.newPostText} />
				}
			}
		</StoreContext.Consumer>
	)

}


export default MyPostsContainer
