import React from "react";
import { Field, reduxForm } from "redux-form";
import { login } from './../../redux/authReducer';
import { connect } from 'react-redux';
import { Input } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../utils/validators/validators";



const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} >
			<div>
				<Field placeholder={"Login"} name={'login'} component={Input} validate={[required, maxLengthCreator(10)]} />
			</div>
			<div>
				<Field placeholder={"Password"} name={'password'} component={Input} validate={[required, maxLengthCreator(10)]} />
			</div>
			<div>
				<Field type={'checkbox'} name={'rememberMe'} component={'input'} /> remember me
			</div>
			<div>
				<button>Login</button>
			</div>
		</form>)
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
	const onSubmit = (formData) => {
		props.login(formData.login, formData.password, formData.rememberMe);
	}

	return <div>
		<h1>Login</h1>
		<LoginReduxForm onSubmit={onSubmit} />
	</div>
}


let mapStateToProps = (state) => ({
	// profile: state.profilePage.profile,
	// status: state.profilePage.status,
});


export default connect(mapStateToProps, { login })(Login);
