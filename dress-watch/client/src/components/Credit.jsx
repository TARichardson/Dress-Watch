import React from 'react';

export default function Credit(props) {
  const msg = `I'm in Credits, are you logged in? ${props.logged_in}`;
  console.log(props)
  return (
    <div key="CreditDiv" className="MainContent">
      <h1>Credits</h1>
      <h3>{msg}</h3>
    </div>
  )
}
