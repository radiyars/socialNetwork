import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow } from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import { usersAPI } from "../api/api";
import { toggleFollowingProgress } from './../../redux/usersReducer';


class UsersContainer extends React.Component {

	// полсе того как компонента прорисовалась можно выполнить запрос на сервер
	componentDidMount() {
		this.props.toggleIsFetching(true);
		usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
			.then(data => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(data.items);
				this.props.setTotalUsersCount(data.totalCount);
			});
	}

	onPageChenged = (pageNumber) => {
		this.props.toggleIsFetching(true);
		this.props.setCurrentPage(pageNumber);
		usersAPI.getUsers(pageNumber, this.props.pageSize)
			.then(data => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(data.items);
			});
	}

	render() {
		return <>
			{this.props.isFetching ? <Preloader /> : null}
			<Users totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChenged={this.onPageChenged}
				users={this.props.users}
				follow={this.props.follow}
				unfollow={this.props.unfollow}
				isFetching={this.props.isFetching}
				toggleFollowingProgress={this.props.toggleFollowingProgress}
				followingInProgress={this.props.followingInProgress}
			/>
		</>
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress,
	}
}

// Создаем контейнерную компоненту
// connet сам вызовет mapStateToProps и сам передаст state. connect позволяет нам забыть про store.
export default connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching,
	toggleFollowingProgress,
})(UsersContainer);
