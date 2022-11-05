import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogsReducer';
import StoreContext from '../../storeContext';
import Dialogs from './Dialogs';


function DialogsContainer() {

	return (
		<StoreContext.Consumer>
			{
				(store) => {
					let state = store.getState();

					let onSendMessageClick = () => {
						store.dispatch(addMessageActionCreator());
					}

					let onMessageChange = (text) => {
						store.dispatch(updateNewMessageActionCreator(text));
					}

					return < Dialogs
						updateNewMessage={onMessageChange}
						addMessage={onSendMessageClick}
						dialogs={state.dialogsPage.dialogs}
						messages={state.dialogsPage.messages}
						newMessageText={state.dialogsPage.newMessageText} />
				}
			}
		</StoreContext.Consumer>
	)

}

export default DialogsContainer;