import React from 'react';

export default function ProfileForm(props) {
  return (
    <form onSubmit={props.submit} className="ProfileForm">
    <label>
    User Name:
    <input type='text'
           name='user_name'
           value={props.profile.user_name}
           onChange={props.change} />
   </label>
   <label>
   First Name:
   <input type='text'
          name='real_first_name'
          value={props.profile.real_first_name}
          onChange={props.change}/>
   </label>
   <label>
   Last Name:
   <input type='text'
          name='real_last_name'
          value={props.profile.real_last_name}
          onChange={props.change}/>
   </label>
   <label>
   Email:
   <input type='text'
          name='email'
          value={props.profile.email}
          onChange={props.change}/>
   </label>
   <label>
   Password:
   <input type='text'
          name='password'
          value={props.profile.password}
          onChange={props.change}/>
   </label>
   <label>
   Password Confirmation:
   <input type='text'
          name='password_confirmation'
          value={props.profile.password_confirmation}
          onChange={props.change}/>
   </label>
   <button type="submit">Update</button>
   </form>
  )
}
