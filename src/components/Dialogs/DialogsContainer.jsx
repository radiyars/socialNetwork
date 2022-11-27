import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { withAuthNavigate } from './../../hoc/withAuthNavigate';


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

// debugger;
let AuthNavigateComponent = withAuthNavigate(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthNavigateComponent);

export default DialogsContainer;