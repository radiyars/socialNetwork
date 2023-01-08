import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import { Provider } from 'react-redux';



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
