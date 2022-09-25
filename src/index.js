import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let posts = [
	{ id: 1, post: 'Hi, how are you?', likesCount: 20 },
	{ id: 2, post: "It's my first post", likesCount: 100 },
]

let dialogs = [
	{ id: 1, name: 'Radiy' },
	{ id: 2, name: 'Marina' },
	{ id: 3, name: 'Timur' },
	{ id: 4, name: 'Daniil' },
	{ id: 5, name: 'Babula' },
	{ id: 6, name: 'Dedula' },
]

let messages = [
	{ id: 1, message: 'Hi' },
	{ id: 2, message: 'How is your React?' },
	{ id: 3, message: 'Yo!' },
	{ id: 4, message: 'Yo!' },
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App dialogs={dialogs} messages={messages} posts={posts} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
