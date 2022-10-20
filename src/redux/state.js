import { rerenderEntireTree } from "../render";


let state = {

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
}

window.state = state;

export let addPost = () => {
	let newPost = {
		id: 5,
		post: state.profilePage.newPostText,
		likesCount: 0
	};
	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText = '';
	rerenderEntireTree(state);
}


export let updateNewPostText = newText => {
	state.profilePage.newPostText = newText;
	rerenderEntireTree(state);
}

export default state