import { usersAPI, profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


// state по умолчанию
let initialState = {
	posts: [
		{ id: 1, post: 'Hi, how are you?', likesCount: 20 },
		{ id: 2, post: "It's my first post", likesCount: 100 },
	],

	newPostText: '',
	profile: null,
	status: '',
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {

		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.newText,
			};

		case ADD_POST: {
			let post = state.newPostText;
			return {
				...state,
				newPostText: '',
				posts: [...state.posts, { id: 3, post: post, likesCount: 5 }],
			}
		}

		case SET_USER_PROFILE: {
			return { ...state, profile: action.profile }
		}

		case SET_STATUS: {
			return {
				...state,
				status: action.status
			}
		}

		default:
			return state;

	}

}

export const addPost = () => ({ type: ADD_POST });

export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text, });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const setStatus = (status) => ({ type: SET_STATUS, status });


export const getUserProfile = (userId) => {
	return (dispatch) => {
		usersAPI.getUserProfile(userId)
			.then(data => {
				dispatch(setUserProfile(data));
			});
	}
}

export const getStatus = (userId) => {
	return (dispatch) => {
		profileAPI.getStatus(userId)
			.then(data => {
				dispatch(setStatus(data));
			});
	}
}

export const updateStatus = (status) => {
	return (dispatch) => {
		profileAPI.updateStatus(status)
			.then(data => {
				if (data.resultCode === 0) {
					dispatch(setStatus(status));
				}
			});
	}
}


export default profileReducer;