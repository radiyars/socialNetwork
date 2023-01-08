import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, unfollow, requestUsers, toggleFollowingProgress } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import { getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount, getIsFetching, getUsers } from "../../redux/users-selectors";


class UsersContainer extends React.Component {

	// полсе того как компонента прорисовалась можно выполнить запрос на сервер
	componentDidMount() {
		const { currentPage, pageSize } = this.props;
		this.props.getUsers(currentPage, pageSize);
	}


	onPageChenged = (pageNumber) => {
		const { pageSize } = this.props;
		this.props.setCurrentPage(pageNumber);
		this.props.getUsers(pageNumber, pageSize);
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
				followingInProgress={this.props.followingInProgress}
			/>
		</>
	}
}


let mapStateToProps = (state) => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state),
	}
}


// Создаем контейнерную компоненту
// connet сам вызовет mapStateToProps и сам передаст state. connect позволяет нам забыть про store.
export default connect(mapStateToProps, {
	follow,
	unfollow,
	setCurrentPage,
	toggleFollowingProgress,
	getUsers: requestUsers,
})(UsersContainer);
