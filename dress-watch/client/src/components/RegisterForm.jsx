import React from 'react';

export default function RegisterForm(props) {
  return (
    <form onSubmit={props.submit} className="RegisterForm">
      <div className="FormItem">
      <label>
        First Name:
      </label>
      <input type='text'
             name='real_first_name'
             value={props.register.real_first_name}
             onChange={props.change}/>
      </div>
      <div className="FormItem">
      <label>
        Last Name:
      </label>
      <input type='text'
             name='real_last_name'
             value={props.register.real_last_name}
             onChange={props.change}/>
      </div>
      <div className="FormItem">
      <label>
        Email:
      </label>
      <input type='text'
             name='email'
             value={props.register.email}
             onChange={props.change}/>
      </div>
      <div className="FormItem">
      <label>
        User Name:
      </label>
      <input type='text'
             name='user_name'
             value={props.register.user_name}
             onChange={props.change}/>
      </div>
      <div className="FormItem">
      <label>
        Password:
      </label>
      <input type='text'
             name='password'
             value={props.register.password}
             onChange={props.change}/>
      </div>
      <div className="FormItem">
        <label>
          Password Confirmation:
        </label>
        <input type='text'
               name='password_confirmation'
               value={props.register.password_confirmation}
               onChange={props.change}/>
      </div>
      <button type="submit" className="button">Register</button>
    </form>
  )
}
