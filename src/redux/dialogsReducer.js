const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

// state по умолчанию
let initialState = {
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

const dialogsReducer = (state = initialState, action) => {

	switch (action.type) {

		case ADD_MESSAGE:
			let newMessage = {
				id: 5,
				message: state.newMessageText,
			}
			state.messages.push(newMessage);
			state.newMessageText = '';
			return state;

		case UPDATE_NEW_MESSAGE_TEXT:
			state.newMessageText = action.newMessage;
			return state;

		default:
			return state;

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

export default dialogsReducer;