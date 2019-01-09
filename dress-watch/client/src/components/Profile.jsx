import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';


export default function Profile(props){

  console.log(props)
  const token = `token = ${!!localStorage.getItem('token')}`
  const profile = ( props.app_state.to_auth
  )

  ? <Redirect push to="/auth" />
  : <div key="profile">
  <button onClick={props.log_out}>Log Out</button>
  <h1>Profile</h1>
  {token}
  </div>

  return (
    <Fragment>
    {profile}
    </Fragment>

  )
}
