import React from 'react'

export default function LoginForm(props) {
  return (
    <form onSubmit={props.submit} className="LoginForm">
    <label>
    Email:
    <input type='text'
           name='email'
           value={props.login.email}
           onChange={props.change}/>
    </label>
    <label>
    User Name:
    <input type='text'
           name='user_name'
           value={props.login.user_name}
           onChange={props.change}/>
    </label>
    <label>
    Password:
    <input type='text'
           name='password'
           value={props.login.password}
           onChange={props.change}/>
    </label>

    <button type="submit">Login</button>
  </form>
  )
}
