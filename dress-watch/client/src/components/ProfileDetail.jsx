import React from 'react';

export default function ProfileDetail(props) {
  const profile = props.profile
  const key = `PFDKey-${profile.id}`
  return (
      <div key={key}>
        <h2>User Name: {profile.user_name}</h2>
        <h2>First Name: {profile.real_first_name}</h2>
        <h2>Last Name: {profile.real_last_name}</h2>
        <h2>Email: {profile.email}</h2>
        <h2>Password:  *******</h2>
        <button onClick={props.click}>Edit</button>
      </div>
  )
}
