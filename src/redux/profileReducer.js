const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

// state по умолчанию
let initialState = {
	posts: [
		{ id: 1, post: 'Hi, how are you?', likesCount: 20 },
		{ id: 2, post: "It's my first post", likesCount: 100 },
	],

	newPostText: '',
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

		default:
			return state;

	}

}

export const addPostActionCreator = () => {
	return {
		type: ADD_POST,
	}
}

export const updateNewPostActionCreator = (text) => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		newText: text,
	}
}

export default profileReducer;