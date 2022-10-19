import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post'


function MyPosts(props) {


	let postsElements = props.posts.map(post => <Post message={post.post} likesCount={post.likesCount} />)

	let newPostElement = React.createRef();

	let addPost = () => {
		let text = newPostElement.current.value;
		props.addPost(text);
		newPostElement.current.value = '';
	}

	return (
		<div className={style.container}>
			<div>
				<div>
					<textarea ref={newPostElement}></textarea>
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
