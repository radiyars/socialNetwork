import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/state';
import style from './MyPosts.module.css'
import Post from './Post/Post'




function MyPosts(props) {

	let postsElements = props.posts.map(post => <Post message={post.post} likesCount={post.likesCount} />)

	let newPostElement = React.createRef();

	let addPost = () => {
		props.dispatch(addPostActionCreator());
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.dispatch(updateNewPostActionCreator(text));
	}

	return (
		<div className={style.container}>
			<div>
				<div>
					<textarea onChange={onPostChange}
						ref={newPostElement}
						value={props.newPostText} />
				</div>
				<button onClick={addPost}>Add post</button>
			</div>
			<div className={style.posts}>
				{postsElements}
			</div>
		</div>
	)
}

export default MyPosts
