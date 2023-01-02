
import { getUserAuthData } from './authReducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

// state по умолчанию
let initialState = {
	initialized: false,
}

const appReducer = (state = initialState, action) => {

	switch (action.type) {

		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true,
			}

		default:
			return state;

	}
}


// Инициализация успешна
export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });


// Получаем данные пользователя
export const initializeApp = () => (dispatch) => {
	let promise = dispatch(getUserAuthData());

	Promise.all([promise])
		.then(() => {
			dispatch(initializedSuccess());
		})
}


export default appReducer;