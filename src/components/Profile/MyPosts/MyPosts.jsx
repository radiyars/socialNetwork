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
				<Post message='Hi, how are you?' likeCount='20' />
				<Post message="It's my first post" likeCount='15' />
			</div>
		</div>
	)
}

export default MyPosts
