import React from "react";
import styles from './Users.module.css';
import userPhoto from '../../assets/images/userNullAvatar.png'
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { usersAPI } from './../api/api';
import { toggleFollowingProgress } from './../../redux/usersReducer';


let Users = (props) => {

	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

	let pages = [];

	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	let curP = props.currentPage;
	let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
	let curPL = curP + 5;
	let slicedPages = pages.slice(curPF, curPL);

	return <div>

		<div>
			{slicedPages.map(p => {
				return <span className={props.currentPage === p && styles.selectedPage} onClick={() => { props.onPageChenged(p) }} >{p + ' '}</span>
			})}
		</div>

		{
			props.users.map(user => <div key={user.id} >
				<span>
					<div>
						<NavLink to={'/profile/' + user.id}>
							<img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto} />
						</NavLink>
					</div>
					<div>
						{user.followed

							? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
								props.toggleFollowingProgress(true, user.id);
								usersAPI.unfollow(user.id)
									.then(data => {
										if (data.resultCode == 0) {
											props.unfollow(user.id)
										}
										props.toggleFollowingProgress(false, user.id);
									});
							}}>Unfollow</button>

							: <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
								props.toggleFollowingProgress(true, user.id);
								usersAPI.follow(user.id)
									.then(data => {
										if (data.resultCode == 0) {
											props.follow(user.id)
										}
										props.toggleFollowingProgress(false, user.id);
									});
							}}>Follow</button>}

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
			</div >
			)
		}
	</div >
}

export default Users;