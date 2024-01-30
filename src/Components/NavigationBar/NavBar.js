import React from 'react'
import './navBar.css'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='NavBarBox'>
            <div className="navBarLeft">
                <NavLink to='/' className="logo">campus bodima</NavLink>
            </div>
            <div className="navBarRight">
              <div className="navBarIcons">
                    <div className="iconButtons">
                        <NavLink to='/Login' className='logbutton'>Login</NavLink>
                        <NavLink to='/SignUp' className='signinbutton'>Sign up</NavLink>
                        <NavLink to='/AboutUs' className='aboutbutton'>About us</NavLink>
                    </div>
                     
              </div>
            </div>
    </div>
  )
}
