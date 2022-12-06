import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';

// state по умолчанию
let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	// isFeching: false,
}

const authReducer = (state = initialState, action) => {

	switch (action.type) {

		case SET_USER_DATA:
			return {
				...state,
				...action.payload,
				isAuth: true,
			}

		default:
			return state;

	}
}


export const getUserAuthData = () => (dispatch) => {
	authAPI.getUserAuthData()
		.then(data => {
			if (data.resultCode === 0) {
				let { id, email, login } = data.data;
				dispatch(setAuthUserData(id, email, login, true));
			};
		});

}

// Залогиниться
export const login = (email, password, rememberMe) => {
	return (dispatch) => {
		authAPI.login(email, password, rememberMe)
			.then(data => {
				if (data.resultCode === 0) {
					dispatch(getUserAuthData());
				}
			});
	}
}

// Вылогиниться
export const logout = () => {
	return (dispatch) => {
		authAPI.logout()
			.then(data => {
				if (data.resultCode === 0) {
					dispatch(getUserAuthData(null, null, null, false));
				}
			});
	}
}



export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } });

export default authReducer;