import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post'


function MyPosts(props) {

	let postsElements = props.profilePage.posts.map(post => <Post message={post.post} likesCount={post.likesCount} />)
	let newPostText = props.profilePage.newPostText;

	// Пушим новый пост в state
	let onAddPost = () => {
		props.addPost()
	}

	// При любом изменении в textarea прокидываем иго (изменение) в state и уже оттуда выводим его 
	// в textarea (FLUX - архитектура)
	let onPostChange = (event) => {
		let text = event.target.value;
		props.updateNewPostText(text);
	}

	return (
		<div className={style.container}>
			<div>
				<div>
					<textarea onChange={onPostChange}
						value={newPostText}
						placeholder='введите текст Вашего поста' />
				</div>
				<button onClick={onAddPost}>Add post</button>
			</div>
			<div className={style.posts}>
				{postsElements}
			</div>
		</div>
	)

}


export default MyPosts
