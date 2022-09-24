import style from './MyPosts.module.css'
import Post from './Post/Post'


function MyPosts() {

	let posts = [
		{ id: 1, post: 'Hi, how are you?', likesCount: 20 },
		{ id: 2, post: "It's my first post", likesCount: 100 },
	]

	let postsElements = posts.map(post => <Post message={post.post} likesCount={post.likesCount} />)

	return (
		<div className={style.container}>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<button>Add post</button>
			</div>
			<div className={style.posts}>
				{postsElements}
			</div>
		</div>
	)
}

export default MyPosts
