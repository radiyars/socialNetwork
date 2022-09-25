import style from './MyPosts.module.css'
import Post from './Post/Post'


function MyPosts(props) {


	let postsElements = props.posts.map(post => <Post message={post.post} likesCount={post.likesCount} />)

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
