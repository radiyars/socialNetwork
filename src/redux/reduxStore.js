// import { createStore } from "redux";
import { combineReducers, legacy_createStore as createStore } from "redux"
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;