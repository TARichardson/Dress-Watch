import React from 'react';

export default function ProfileForm(props) {
  return (
    <form onSubmit={props.submit} className="ProfileForm">
      <div className="FormItem">
        <label>
        User Name:
       </label>
       <input type='text'
              name='user_name'
              value={props.profile.user_name}
              onChange={props.change} />
      </div>
      <div className="FormItem">
       <label>
       First Name:
       </label>
       <input type='text'
              name='real_first_name'
              value={props.profile.real_first_name}
              onChange={props.change}/>

     </div>
     <div className="FormItem">
       <label>
       Last Name:
       </label>
       <input type='text'
              name='real_last_name'
              value={props.profile.real_last_name}
              onChange={props.change}/>

     </div>
     <div className="FormItem">
       <label>
       Email:
       </label>
       <input type='text'
              name='email'
              value={props.profile.email}
              onChange={props.change}/>

     </div>
     <div className="FormItem">
       <label>
       Password:
       </label>
       <input type='text'
              name='password'
              value={props.profile.password}
              onChange={props.change}/>

     </div>
     <div className="FormItem">
       <label>
       Password Confirmation:
       </label>
       <input type='text'
              name='password_confirmation'
              value={props.profile.password_confirmation}
              onChange={props.change}/>

      </div>
      <button type="submit" className="button">Update</button>
   </form>
  )
}
