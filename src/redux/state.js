const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let store = {

	_state: {

		profilePage: {
			posts: [
				{ id: 1, post: 'Hi, how are you?', likesCount: 20 },
				{ id: 2, post: "It's my first post", likesCount: 100 },
			],
			newPostText: '',

		},

		dialogsPage: {
			dialogs: [
				{ id: 1, name: 'Radiy' },
				{ id: 2, name: 'Marina' },
				{ id: 3, name: 'Timur' },
				{ id: 4, name: 'Daniil' },
				{ id: 5, name: 'Babula' },
				{ id: 6, name: 'Dedula' },
			],

			messages: [
				{ id: 1, message: 'Hi' },
				{ id: 2, message: 'How is your React?' },
				{ id: 3, message: 'Yo!' },
				{ id: 4, message: 'Yo!' },
			],

			newMessageText: ''
		}
	},

	_callSubscriber() {
		console.log('State changed');
	},

	subscribe(observer) {
		this._callSubscriber = observer; // паттерн observer
	},

	getState() {
		return this._state
	},

	dispatch(action) {
		switch (action.type) {

			case ADD_POST:
				let newPost = {
					id: 5,
					post: this._state.profilePage.newPostText,
					likesCount: 0
				};
				this._state.profilePage.posts.push(newPost);
				this._state.profilePage.newPostText = '';
				this._callSubscriber(this._state);
				break;

			case UPDATE_NEW_POST_TEXT:
				this._state.profilePage.newPostText = action.newText;
				this._callSubscriber(this._state);
				break;

			case ADD_MESSAGE:
				let newMessage = {
					id: 5,
					message: this._state.dialogsPage.newMessageText,
				}
				this._state.dialogsPage.messages.push(newMessage);
				this._state.dialogsPage.newMessageText = '';
				this._callSubscriber(this._state);
				break;

			case UPDATE_NEW_MESSAGE_TEXT:
				this._state.dialogsPage.newMessageText = action.newMessage;
				this._callSubscriber(this._state);
				break;

		}
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

export const addMessageActionCreator = () => {
	return {
		type: ADD_MESSAGE,
	}
}

export const updateNewMessageActionCreator = (text) => {
	return {
		type: UPDATE_NEW_MESSAGE_TEXT,
		newMessage: text,
	}
}


export default store

window.state = store; // для вывода в консоль 