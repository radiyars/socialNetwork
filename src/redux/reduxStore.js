// import { createStore } from "redux";
import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

// Отдаем редьюсеры редаксовскому стору
let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducer,
});

// Создаем store. В нем уже имеются методы gerState, subcscribe, dispatch.
// Создает state, у которого внутри появляются свойства из reducers
let store = createStore(reducers);

// window.store = store;

export default store;