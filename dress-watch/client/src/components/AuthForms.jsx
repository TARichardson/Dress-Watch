import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm    from './LoginForm.jsx';
import RegisterForm from './RegisterForm.jsx';


export default function AuthForms(props) {

  try {
  const Login = props.app_state.to_register
  ? <Fragment>
      <RegisterForm register={props.app_state.register}
                    submit={props.handle_register_submit}
                    change={props.handle_register_change} />
      <button onClick={props.toggle_register}>to login page</button>
    </Fragment>
  : <Fragment>
      <LoginForm login={props.app_state.login}
                 submit={props.handle_login_submit}
                 change={props.handle_login_change}/>
      <button onClick={props.toggle_register}>to register page</button>
    </Fragment>
  const authForms = props.app_state.to_profile
  ? <Redirect to="/profile" />
  : <div key="authForm" className="MainContent">
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
