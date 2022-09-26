import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


function Dialogs(props) {

	let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

	let messagesElements = props.state.messages.map(message => <Message message={message.message} />);

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