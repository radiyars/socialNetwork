import MyPosts from './MyPosts/MyPosts'
import classes from './Profile.module.css'


function Profile() {
	return (
		<div>
			<div>
				<img src='https://cdn.ziarahmekkah.com/2021/12/bg-footer-ziarah-mekkah.png' className={classes.img} />
			</div>
			<div>
				avatar + description
			</div>
			<MyPosts />
		</div>
	)
}

export default Profile
