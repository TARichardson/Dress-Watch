import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm    from './LoginForm.jsx';
import RegisterForm from './RegisterForm.jsx';


export default function AuthForms(props) {

  try {
  const Login = props.app_state.to_register
  ? <Fragment>
      <RegisterForm/>
      <button onClick={props.toggle_register}>to login page</button>
      <button onClick={props.handle_login_submit}>Register</button>
    </Fragment>
  : <Fragment>
      <LoginForm/>
      <button onClick={props.toggle_register}>to register page</button>
      <button onClick={props.handle_login_submit}>Log in</button>
    </Fragment>
  const authForms = props.app_state.to_profile
  ? <Redirect to="/profile" />
  : <div key="authForm">
      <h1> Auth Forms</h1>
      {Login}
    </div>

  return (
    <Fragment>
      {authForms}
    </Fragment>
  )
}
catch{
  return (
    <Fragment>
    <h1> loading </h1>
    </Fragment>
  )
}
}
