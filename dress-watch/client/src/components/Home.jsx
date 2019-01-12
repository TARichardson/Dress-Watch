import React from 'react';

export default function Home(props) {
  const msg = `I'm Home, are you logged in? ${props.logged_in}`;
  console.log(props)
  return (
    <div key="HomeDiv" className="MainContent">
      <h1>Home</h1>
      <h3>{msg}</h3>
    </div>
  )
}
