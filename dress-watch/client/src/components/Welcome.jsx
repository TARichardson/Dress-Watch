import React from 'react';

export default function Welcome(props) {
  return (
    <div key="Welcome">
    <h1>Welcome</h1>
    <button onClick={props.toggle_welcome}>Enter</button>
  </div>
  )
}
