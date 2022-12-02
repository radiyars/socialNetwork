// import { createStore } from "redux";
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import authReducer from "./authReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';

// Отдаем редьюсеры редаксовскому стору
let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducer,
	auth: authReducer,
	form: formReducer,
});

// Создаем store. В нем уже имеются методы gerState, subcscribe, dispatch.
// Создает state, у которого внутри появляются свойства из reducers
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

// window.store = store;

export default store;