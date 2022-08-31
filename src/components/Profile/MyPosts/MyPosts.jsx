import classes from './MyPosts.module.css'
import Post from './Post/Post'


function MyPosts() {
	return (
		<div >
			My posts
			<div>
				<textarea></textarea>
				<button>Add post</button>
			</div>
			<div className={classes.posts}>
				<Post message='Hi, how are you?' likesCount='20' />
				<Post message="It's my first post" likesCount='15' />
			</div>
		</div>
	)
}

export default MyPosts
