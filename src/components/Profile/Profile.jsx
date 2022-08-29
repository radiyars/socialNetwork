import MyPosts from './MyPosts/MyPosts'
import classes from './Profile.module.css'


function Profile() {
	return (
		<div className={classes.content}>
			<div>
				<img src='https://cdn.ziarahmekkah.com/2021/12/bg-footer-ziarah-mekkah.png' />
			</div>
			<div>
				avatar + description
			</div>
			<MyPosts />
		</div>
	)
}

export default Profile
