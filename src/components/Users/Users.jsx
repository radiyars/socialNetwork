import React from "react";
import Paginator from '../common/Paginator/Paginator';
import User from './User';


let Users = ({ currentPage, totalUsersCount, pageSize, onPageChenged, users, ...props }) => {
	return (
		<div>
			<div>
				<Paginator
					currentPage={currentPage}
					onPageChenged={onPageChenged}
					totalUsersCount={totalUsersCount}
					pageSize={pageSize}
				/>
			</div>
			<div>
				{
					users.map(user => <User
						user={user}
						followingInProgress={props.followingInProgress}
						follow={props.follow}
						unfollow={props.unfollow}
						key={user.id}
					/>
					)
				}
			</div>
		</div >
	)
}

export default Users;