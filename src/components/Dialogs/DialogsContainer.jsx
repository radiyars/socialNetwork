import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessage: (text) => dispatch(updateNewMessageActionCreator(text)),
		addMessage: () => dispatch(addMessageActionCreator()),
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;