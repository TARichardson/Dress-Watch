import React from 'react'
import {Link} from 'react-router-dom'


// a footer with links to: home, about page, credit page
export default function NavBar(props){
  const Home     = () => <li><Link to='/Home'>Home</Link></li>
  const About     = () => <li><Link to='/about'>About</Link></li>
  const Credit  = () => <li><Link to='/credit'>Credit</Link></li>

  return (
    <ul>
      {Home()}
      {About()}
      {Credit()}

    </ul>
  )
}
