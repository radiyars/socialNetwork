import React from "react";
import { Field, reduxForm } from "redux-form";
import { login } from './../../redux/authReducer';
import { connect } from 'react-redux';
import { Input } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../utils/validators/validators";
import { Navigate } from "react-router-dom";
import style from './../common/FormsControls/FormsControls.module.css';



const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} >
			<div>
				<Field placeholder={"Login"} name={'login'} component={Input} validate={[required, maxLengthCreator(30)]} />
			</div>
			<div>
				<Field placeholder={"Password"} name={'password'} component={Input} validate={[required, maxLengthCreator(30)]} />
			</div>
			<div>
				<Field type={'checkbox'} name={'rememberMe'} component={'input'} /> remember me
			</div>
			{props.error && <div className={style.formSummaryError}>
				{props.error}
			</div>
			}
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

	if (props.isAuth) {
		return <Navigate to={'/profile'} />
	}

	return <div>
		<h1>Login</h1>
		<LoginReduxForm onSubmit={onSubmit} />
	</div>
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
})

// connect засовывает login не thunk а callback!!!
export default connect(mapStateToProps, { login })(Login);
