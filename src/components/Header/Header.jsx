import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';



function Header(props) {
	return (
		<header className={styles.header}>
			<img src='https://e7.pngegg.com/pngimages/356/636/png-clipart-logo-graphic-designer-business-online-and-offline-design-ring-orange.png' />

			<div className={styles.loginBlock}>
				{props.isAuth ? props.login : <NavLink to={'/login'} >Login</NavLink>}
			</div>
		</header>
	)
}

export default Header
