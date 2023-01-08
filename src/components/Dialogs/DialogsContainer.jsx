import { connect } from 'react-redux';
import { addMessageActionCreator } from '../../redux/dialogs-reducer';
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
		addMessage: (newMessageText) => dispatch(addMessageActionCreator(newMessageText)),
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthNavigate
)(Dialogs);
