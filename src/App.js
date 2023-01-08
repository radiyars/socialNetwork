import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import React from 'react';
import { connect } from 'react-redux';
import Preloader from './components/common/preloader/Preloader';
import { initializeApp } from './redux/app-reducer';


class App extends React.Component {

	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}

		return (
			<BrowserRouter>
				<div className='app-wrapper'>
					<HeaderContainer />
					<Navbar />
					<div className='app-wrapper-content'>
						<Routes>
							{/* С помошью Route следим за адресной строкой, и если адрес совпадает с path прорисовываем нашу компоненту */}
							<Route path='/profile/:userId' element={<ProfileContainer />} />
							<Route path='/profile/' element={<ProfileContainer />} />
							<Route path='/dialogs/*' element={<DialogsContainer />} />
							<Route path='/users/' element={<UsersContainer />} />
							<Route path='/login' element={<Login />} />


							<Route path='/news' element={<News />} />
							<Route path='/music' element={<Music />} />
							<Route path='/settings' element={<Settings />} />
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

let mapStateToProps = (state) => ({
	initialized: state.app.initialized,
})

export default connect(mapStateToProps, { initializeApp })(App);
