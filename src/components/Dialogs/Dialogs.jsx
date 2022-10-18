import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


function Dialogs(props) {

	let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

	let messagesElements = props.state.messages.map(message => <Message message={message.message} />);


	let newMessage = React.createRef();

	let addNewMessage = () => {
		// debugger;
		let text = newMessage.current.value;
		alert(text);
	}



	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={styles.messages}>
				{messagesElements}
				<div>
					<textarea ref={newMessage}></textarea>
				</div>
				<button onClick={addNewMessage}>New message</button>
			</div>
		</div>
	)
}

export default Dialogs;