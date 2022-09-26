import MyPosts from './MyPosts/MyPosts'

import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'


function Profile(props) {
	return (
		<div>
			<ProfileInfo />
			<MyPosts posts={props.state.posts} />
		</div>
	)
}

export default Profile
