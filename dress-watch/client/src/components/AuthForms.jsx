import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm    from './LoginForm.jsx';
import RegisterForm from './RegisterForm.jsx';


export default class AuthForms extends Component {
  constructor(props) {
  super(props);

  this.state = {
    credentials: {
      email: "",
      user_name: "",
      password: ""
    },
    to_profile: false,
    to_register: false
  }
}

handle_login = (evt) => {
  evt.preventDefault();
  const tokenData = "Data";
  localStorage.setItem('token', tokenData.jwt);
  this.setState({
    to_profile: true
  });
}

handle_register = (evt) => {
  evt.preventDefault();

}

handle_login_change = (evt) => {}
handle_register_change = (evt) => {}

toggle_register = () => {
  const new_reg = !this.state.to_register;
  this.setState({
    to_register: new_reg
  })
}
render() {
  const Login = this.state.to_register
  ? <Fragment>
      <RegisterForm/>
      <button onClick={this.toggle_register}>to login page</button>
      <button onClick={this.log_in}>Register</button>
    </Fragment>
  : <Fragment>
      <LoginForm/>
      <button onClick={this.toggle_register}>to register page</button>
      <button onClick={this.log_in}>Log in</button>
    </Fragment>
  const authForms = this.state.to_profile
  ? <Redirect to="/profile" />
  : <div key="authForm">
      <h1> Auth Forms</h1>
      {Login}

    </div>;

  return (
    <Fragment>
      {authForms}
    </Fragment>
  )
}

}
