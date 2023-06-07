import React from 'react'
import'./Header.css';
import { Link, NavLink } from 'react-router-dom'

const Header = () => {

  return (
<header>
<div className='container'>
  <div className='row'>
   <div className='col-md-6'>
     <h2> Caring for your vision</h2>
    <a href='/SignUp'>
     <button >Subscribe Now</button>
     </a>
      
   
   </div>
   <div className='col-md-6'>
   </div>
   </div>
</div>
</header>
    )
}


export default Header