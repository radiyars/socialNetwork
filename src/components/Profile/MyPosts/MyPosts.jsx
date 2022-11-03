import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/state';
import style from './MyPosts.module.css'
import Post from './Post/Post'




function MyPosts(props) {
	// debugger;


	let postsElements = props.posts.map(post => <Post message={post.post} likesCount={post.likesCount} />)

	let newPostElement = React.createRef();

	// Пушим новый пост в state
	let addPost = () => {
		props.dispatch(addPostActionCreator());
	}

	// При любом изменении в textarea прокидываем иго (изменение) в state и уже оттуда выводим его 
	// в textarea (FLUX - архитектура)
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
