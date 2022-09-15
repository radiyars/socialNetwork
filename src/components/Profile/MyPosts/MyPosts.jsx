import style from './MyPosts.module.css'
import Post from './Post/Post'


function MyPosts() {
	return (
		<div className={style.container}>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<button>Add post</button>
			</div>
			<div className={style.posts}>
				<Post message='Hi, how are you?' likesCount='20' />
				<Post message="It's my first post" likesCount='15' />
			</div>
		</div>
	)
}

export default MyPosts
