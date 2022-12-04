const ADD_MESSAGE = 'ADD-MESSAGE';

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

}

const dialogsReducer = (state = initialState, action) => {

	switch (action.type) {

		case ADD_MESSAGE:
			let text = action.newMessageText;
			return {
				...state,
				messages: [...state.messages, { id: 5, message: text }],
			}

		default:
			return state;

	}
}

export const addMessageActionCreator = (newMessageText) => {
	return {
		type: ADD_MESSAGE,
		newMessageText,
	}
}


export default dialogsReducer;