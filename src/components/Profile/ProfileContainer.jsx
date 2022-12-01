import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile, getStatus, updateStatus } from '../../redux/profileReducer';
import { useLocation, useNavigate, useParams, } from "react-router-dom";
import { withAuthNavigate } from './../../hoc/withAuthNavigate';
import { compose } from 'redux';

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
		return (
			<Component
				{...props}
				router={{ location, navigate, params }}
			/>
		);
	}

	return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {

	componentDidMount() {
		// debugger;
		// let userId = this.props.match.params.userId;
		let userId = this.props.router.params.userId;
		if (!userId) {
			userId = 26730;
		}
		this.props.getUserProfile(userId);
		this.props.getStatus(userId);


		// axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
		// 	.then(response => {
		// 		this.props.setUserProfile(response.data);
		// 	});
	}

	render() {

		return (
			// Контейнерная компонента должна отправить в дочернюю все что в нее приходит.
			<Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
			// (если записать props=this.props то в дочерней компоненте будет props.props)
		)
	}
}


let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
});


export default compose(
	connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
	withRouter,
	withAuthNavigate
)(ProfileContainer);

