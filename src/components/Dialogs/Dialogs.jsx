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

	let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

	let messagesElements = messages.map(message => <Message message={message.message} />);

	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={styles.messages}>
				{messagesElements}
			</div>
		</div>
	)
}

export default Dialogs;