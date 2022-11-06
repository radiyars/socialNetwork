const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

// state по умолчанию
let initialState = {
	posts: [
		{ id: 1, post: 'Hi, how are you?', likesCount: 20 },
		{ id: 2, post: "It's my first post", likesCount: 100 },
	],
	newPostText: 'sdfdf',
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {

		case ADD_POST: {
			let newPost = {
				id: 5,
				post: state.newPostText,
				likesCount: 0
			};
			let stateCopy = { ...state };
			stateCopy.posts = [...state.posts]
			stateCopy.posts.push(newPost);
			stateCopy.newPostText = '';
			return stateCopy;
		}
		case UPDATE_NEW_POST_TEXT: {
			let stateCopy = { ...state };
			stateCopy.newPostText = action.newText;
			return stateCopy;
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