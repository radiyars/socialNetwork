
let store = {

	_state: {

		profilePage: {
			posts: [
				{ id: 1, post: 'Hi, how are you?', likesCount: 20 },
				{ id: 2, post: "It's my first post", likesCount: 100 },
			],
			newPostText: 'ваше сообщение',

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
		}
	},

	getState() {
		return this._state
	},

	_callSubscriber() {
		console.log('State changed');
	},

	addPost() {
		let newPost = {
			id: 5,
			post: this._state.profilePage.newPostText,
			likesCount: 0
		};
		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostText = '';
		this._callSubscriber(this._state);
	},

	updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText;
		this._callSubscriber(this._state);
	},

	subscribe(observer) {
		this._callSubscriber = observer; // паттерн observer
	},

}

export default store

window.state = store; // для вывода в консоль 