import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { withAuthNavigate } from './../../hoc/withAuthNavigate';
import { compose } from 'redux';


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

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthNavigate
)(Dialogs);
