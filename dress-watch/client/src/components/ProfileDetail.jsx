import React from 'react';

export default function ProfileDetail(props) {
  const profile = props.profile
  const key = `PFDKey-${profile.id}`
  return (
      <div key={key} className="ProfileDetail">
        <div className="ProDetDiv"><h2>User Name:   </h2><h2 className="pItem">{profile.user_name}</h2></div>
        <div className="ProDetDiv"><h2>First Name:  </h2><h2 className="pItem">{profile.real_first_name}</h2></div>
        <div className="ProDetDiv"><h2>Last Name:   </h2><h2 className="pItem">{profile.real_last_name}</h2></div>
        <div className="ProDetDiv"><h2>Email:       </h2><h2 className="pItem">{profile.email}</h2></div>
        <div className="ProDetDiv"><h2>Password:    </h2><h2 className="pItem">*******</h2></div>
        <button onClick={props.click} className="button">Edit</button>
      </div>
  )
}
