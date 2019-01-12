import React, { Fragment } from 'react';
import {  Redirect } from 'react-router-dom';
export default function Welcome(props) {
  // if false Redirect
  const redir = !props.to_welcome ?
    <Redirect  to="/Home" />
  : <Fragment></Fragment>

  return (
    <div key="Welcome" className="MainContent">
    {redir}
    <h1>Welcome</h1>
    <button onClick={props.toggle_welcome}>Enter</button>
  </div>
  )
}
