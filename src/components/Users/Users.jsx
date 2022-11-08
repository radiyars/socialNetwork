import React from "react";
import styles from './Users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/images/userNullAvatar.png'

let Users = (props) => {
	// debugger;

	if (props.users.length === 0) {

		axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
			props.setUsers(response.data.items);

		});

		// props.setUsers([
		// 	{ id: 1, pthotoUrl: 'https://womanadvice.ru/sites/default/files/23/2016-01-24_0150/porody_homyakov_8.jpg', followed: false, fullName: 'Radiy', status: 'cool boy!', location: { city: 'Cheboksary', country: 'Russia' } },
		// 	{ id: 2, pthotoUrl: 'https://w-dog.ru/wallpapers/5/18/289291145046987/evropejskaya-koshka-dikij-kot-morda-vzglyad.jpg', followed: true, fullName: 'Marina', status: 'cool girl!', location: { city: 'Cheboksary', country: 'Russia' } },
		// 	{ id: 3, pthotoUrl: 'https://mobimg.b-cdn.net/v3/fetch/30/30b9b6db48e20c2b83ababdeb6e6304c.jpeg', followed: false, fullName: 'Timur', status: 'cool boy!', location: { city: 'Cheboksary', country: 'Russia' } },
		// ])
	}

	return <div>
		{
			props.users.map(user => <div key={user.id}>
				<span>
					<div>
						<img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto} />
					</div>
					<div>
						{user.followed
							? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
							: <button onClick={() => { props.follow(user.id) }}>Follow</button>}
					</div>
				</span>
				<span>
					<span>
						<div>{user.name}</div>
						<div>{user.status}</div>
					</span>
					<span>
						<div>{'user.location.country'}</div>
						<div>{'user.location.city'}</div>
					</span>
				</span>
			</div>)
		}
	</div>
}

export default Users;
