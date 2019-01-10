import React from 'react';

export default function About(props) {
  const msg = `I'm in the About page, are you logged in? ${props.logged_in}`;
  console.log(props)
  return (
    <div key="AboutDiv">
      <h1>About</h1>
      <h3>{msg}</h3>
    </div>
  )
}
