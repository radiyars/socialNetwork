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

let dialogsData = [
	{ id: 1, name: 'Radiy' },
	{ id: 2, name: 'Marina' },
	{ id: 3, name: 'Timur' },
	{ id: 4, name: 'Daniil' },
	{ id: 5, name: 'Babula' },
	{ id: 6, name: 'Dedula' },
]

let messagesData = [
	{ id: 1, message: 'Hi' },
	{ id: 2, message: 'How is your React?' },
	{ id: 3, message: 'Yo!' },
	{ id: 4, message: 'Yo!' },
]


function Dialogs(props) {
	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>
				<DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
				<DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
			</div>
			<div className={styles.messages}>
				<Message message={messagesData[0].message} />
				<Message message={messagesData[1].message} />
			</div>
		</div>
	)
}

export default Dialogs;