import React from 'react'
import {Link} from 'react-router-dom'
// nav bar with links to : home, news, review, products, brands, login-register
export default function NavBar(props){
  const Home = () => <li><Link to='/Home'>Home</Link></li>
  const News = () => <li><Link to='/news'>News</Link></li>
  const Reviews = () => <li><Link to='/reviews'>Reviews</Link></li>
  const Products = () => <li><Link to='/products'>Products</Link></li>
  const Brands = () => <li><Link to='/brands'>Brands</Link></li>
  const login_register_profile = () => props.logged_in
  ? <li><Link to='/profile'>Profile</Link></li>
  : <li><Link to='/auth'>log-in/register</Link></li>


  return (
    <ul>
      {Home()}
      {News()}
      {Reviews()}
      {Products()}
      {Brands()}
      {login_register_profile()}
    </ul>
  )
}
