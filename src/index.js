import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/reduxStore';
import { Provider } from 'react-redux';


//! 47

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App store={store} />
		</Provider>
	</React.StrictMode>
);


reportWebVitals();
