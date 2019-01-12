import React from 'react'
import {Link} from 'react-router-dom'
// style
import './Nav.css';


// nav bar with links to : home, news, review, products, brands, login-register
export default function NavBar(props){
  const Home     = () => <li className="navLink"><Link to='/Home'>Home</Link></li>
  const News     = () => <li className="navLink"><Link to='/news'>News</Link></li>
  const Reviews  = () => <li className="navLink"><Link to='/reviews'>Reviews</Link></li>
  const Products = () => <li className="navLink"><Link to='/products'>Products</Link></li>
  const Brands   = () => <li className="navLink"><Link to='/brands'>Brands</Link></li>

  const login_register_profile = () => props.logged_in
  ? <li className="navLink"><Link to='/profile'>Profile</Link></li>
  : <li className="navLink"><Link to='/auth'>log-in/register</Link></li>

  return (
    <ul className="navContainer">
      {Home()}
      {News()}
      {Reviews()}
      {Products()}
      {Brands()}
      {login_register_profile()}
    </ul>
  )
}
