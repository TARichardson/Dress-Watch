import React from 'react'

export default function LoginForm(props) {
  return (
    <form onSubmit={props.submit} className="LoginForm">
    <div className="FormItem">
    <label>
      Email:
    </label>
    <input type='text'
           name='email'
           value={props.login.email}
           onChange={props.change}/>
    </div>
    <div className="FormItem">
    <label>
      User Name:
    </label>
    <input type='text'
           name='user_name'
           value={props.login.user_name}
           onChange={props.change}/>
    </div>
    <div className="FormItem">
    <label>
      Password:
    </label>
    <input type='text'
           name='password'
           value={props.login.password}
           onChange={props.change}/>
    </div>
    <button type="submit" className="button">Login</button>
  </form>
  )
}
