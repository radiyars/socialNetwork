import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/reduxStore';
import StoreContext, { Provider } from './storeContext';


//! 43

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
	root.render(
		<React.StrictMode>
			<Provider store={store}>
				<App store={store} />
			</Provider>
		</React.StrictMode>
	);
}


rerenderEntireTree(store.getState());

// subscribe у редаксовского stora не передает state!
store.subscribe(() => {
	let state = store.getState();
	rerenderEntireTree(state);
});


reportWebVitals();
