import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from "redux-form";
import { Tetxtarea } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../utils/validators/validators';



function Dialogs(props) {
	// debugger;
	let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
	let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message} key={message.id} />);

	let addNewMessage = (values) => {
		// свойства называются также как и name у Field
		props.addMessage(values.newMessageText);
	}

	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={styles.messages}>
				<div>{messagesElements}</div>

				<AddMessageFormRedux onSubmit={addNewMessage} />

			</div>
		</div>
	)
}

const AddMessageForm = (props) => {
	return (
		// onSubmit - что должно выполниться когда форма засабмитится
		// handleSubmit - специальный метод. придет к нам из reduxForm
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field component={Tetxtarea} name='newMessageText' placeholder='Enter your message' validate={[required, maxLengthCreator(10)]} />
			</div>
			<div>
				<button>Send</button>
			</div>
		</form>
	)
}

const AddMessageFormRedux = reduxForm({ form: 'dialogaddMessageForm' })(AddMessageForm);


export default Dialogs;