import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


function DialogsContainer(props) {

	let state = props.store.getState();

	let onSendMessageClick = () => {
		props.store.dispatch(addMessageActionCreator());
	}

	let onMessageChange = (text) => {
		props.store.dispatch(updateNewMessageActionCreator(text));
	}

	return <Dialogs
		updateNewMessage={onMessageChange}
		addMessage={onSendMessageClick}
		dialogs={state.dialogsPage.dialogs}
		messages={state.dialogsPage.messages}
		newMessageText={state.dialogsPage.newMessageText} />

}

export default DialogsContainer;