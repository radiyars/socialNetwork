import style from './MyPosts.module.css'
import Post from './Post/Post'


function MyPosts() {

	let postsData = [
		{ id: 1, post: 'Hi, how are you?', likesCount: 20 },
		{ id: 2, post: "It's my first post", likesCount: 100 },
	]

	return (
		<div className={style.container}>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<button>Add post</button>
			</div>
			<div className={style.posts}>
				<Post message={postsData[0].post} likesCount={postsData[0].likesCount} />
				<Post message={postsData[1].post} likesCount={postsData[1].likesCount} />
			</div>
		</div>
	)
}

export default MyPosts
