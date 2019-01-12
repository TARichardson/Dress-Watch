import React from 'react'
import {Link} from 'react-router-dom'
// style
import './Nav.css';

// a footer with links to: home, about page, credit page
export default function NavBar(props){
  const Home    = () => <li className="navLinkF"><Link to='/Home'>Home</Link></li>
  const About   = () => <li className="navLinkF"><Link to='/about'>About</Link></li>
  const Credit  = () => <li className="navLinkF"><Link to='/credit'>Credit</Link></li>

  return (
    <ul className="navContainerF">
      {Home()}
      {About()}
      {Credit()}

    </ul>
  )
}
