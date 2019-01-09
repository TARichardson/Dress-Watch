import React from 'react';

export default function RegisterForm(props) {
  return (
    <form onSubmit={props.submit} className="RegisterForm">
    <label>
    First Name:
    <input type='text'
           name='real_first_name'
           value={props.register.real_first_name}
           onChange={props.change}/>
    </label>
    <label>
    Last Name:
    <input type='text'
           name='real_last_name'
           value={props.register.real_last_name}
           onChange={props.change}/>
    </label>
    <label>
    Email:
    <input type='text'
           name='email'
           value={props.register.email}
           onChange={props.change}/>
    </label>
    <label>
    User Name:
    <input type='text'
           name='user_name'
           value={props.register.user_name}
           onChange={props.change}/>
    </label>
    <label>
    Password:
    <input type='text'
           name='password'
           value={props.register.password}
           onChange={props.change}/>
    </label>
    <label>
    Password Confirmation:
    <input type='text'
           name='password_confirmation'
           value={props.register.password_confirmation}
           onChange={props.change}/>
    </label>
    <button type="submit">Register</button>
  </form>
  )
}
