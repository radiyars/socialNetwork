import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';


function DialogItem(props) {
	return (
		<div className={styles.dialog + ' ' + styles.active}>
			<NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
		</div>
	)
}

function Message(props) {
	return (
		<div className={styles.message}>{props.message}</div>

	)
}

function Dialogs(props) {
	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>
				<DialogItem name='Radiy' id='1' />
				<DialogItem name='Andrey' id='2' />
				<DialogItem name='Sveta' id='3' />
				<DialogItem name='Sasha' id='4' />
				<DialogItem name='Viktor' id='5' />
				<DialogItem name='Valers' id='6' />
			</div>
			<div className={styles.messages}>
				<Message message='Hi' />
				<Message message='How is your React?' />
				<Message message='Yo!' />
			</div>
		</div>
	)
}

export default Dialogs;