import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogsReducer';


function Dialogs(props) {
	// debugger;

	let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
	let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message} />);
	let newMessageText = props.dialogsPage.newMessageText;

	// Пушим новое сообщение в state
	let onSendMessageClick = () => {
		props.dispatch(addMessageActionCreator());
	}

	// При любом изменении в textarea прокидываем его (изменения) в state и уже оттуда выводим изменение 
	// в textarea (FLUX - архитектура)
	let onMessageChange = (event) => {
		let text = event.target.value;
		props.dispatch(updateNewMessageActionCreator(text));
	}

	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={styles.messages}>
				<div>{messagesElements}</div>
				<div>
					<textarea
						onChange={onMessageChange}
						value={newMessageText}
						placeholder='Ваше сообшение' />
				</div>
				<button onClick={onSendMessageClick}>New message</button>
			</div>
		</div>
	)
}

export default Dialogs;