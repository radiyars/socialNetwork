import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';


const SET_USER_DATA = 'auth/SET_USER_DATA';


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
export const getAuthUserData = () => async (dispatch) => {
	let response = await authAPI.me();
	if (response.resultCode === 0) {
		let { id, email, login } = response.data;
		dispatch(setAuthUserData(id, email, login, true));
	}
};


// Залогиниться
export const login = (email, password, rememberMe) => async (dispatch) => {
	let response = await authAPI.login(email, password, rememberMe)
	if (response.resultCode === 0) {
		dispatch(getAuthUserData());
	} else {
		let message = response.messages.length > 0 ? response.messages[0] : 'Some error'
		dispatch(stopSubmit('login', { _error: message }));
	}
};


// Вылогиниться
export const logout = () => async (dispatch) => {
	let response = await authAPI.logout()
	if (response.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false));
	}
};


export default authReducer;