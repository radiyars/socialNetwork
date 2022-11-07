import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


function Dialogs(props) {
	// debugger;
	let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
	let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message} key={message.id} />);
	let newMessageText = props.dialogsPage.newMessageText;

	// Пушим новое сообщение в state
	let onSendMessageClick = () => {
		props.addMessage();
	}

	// При любом изменении в textarea прокидываем его (изменения) в state и уже оттуда выводим изменение 
	// в textarea (FLUX - архитектура)
	let onMessageChange = (event) => {
		let text = event.target.value;
		props.updateNewMessage(text);
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
						placeholder='введите текст Вашего сообщения' />
				</div>
				<button onClick={onSendMessageClick}>New message</button>
			</div>
		</div>
	)
}

export default Dialogs;