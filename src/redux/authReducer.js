import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';
import Message from './../components/Dialogs/Message/Message';

const SET_USER_DATA = 'SET_USER_DATA';

// state по умолчанию
let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
}

const authReducer = (state = initialState, action) => {

	switch (action.type) {

		case SET_USER_DATA:
			return {
				...state,
				...action.payload,
			}

		default:
			return state;

	}
}

// Устанавливаем данные пользователя
export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } });

// Получаем данные пользователя
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
export const login = (email, password, rememberMe) => (dispatch) => {

	return authAPI.login(email, password, rememberMe)
		.then(data => {
			if (data.resultCode === 0) {
				dispatch(getUserAuthData());
			} else {
				let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
				dispatch(stopSubmit('login', { _error: message }));
			}
		});
}


// Вылогиниться
export const logout = () => {
	return (dispatch) => {
		authAPI.logout()
			.then(data => {
				if (data.resultCode === 0) {
					dispatch(setAuthUserData(null, null, null, false));
				}
			});
	}
}




export default authReducer;