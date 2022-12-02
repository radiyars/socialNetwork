import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/reduxStore';
import { Provider } from 'react-redux';


//! 75

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
	<React.StrictMode>
		{/* Context API - хотим чтобы все наши дочерние компоненты могли обратиться к store: */}
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);


reportWebVitals();
