import React from 'react'
import './loginNavbar.css'
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import { NavLink } from 'react-router-dom';

export default function LoginNavbar() {
  return (
    <div className='NavBarBox'>
            <div className="navBarLeft">
              <NavLink to='/' className="logo">campus bodima</NavLink>
            </div>
            <div className="navBarRight">
              <div className="userProfile">
                   <div className="icon">
                        <AccountCircleTwoToneIcon/>
                    </div> 
                    <span className="userName">user Name</span> 
              </div>
              <div className="logOutButtonContainer">
              <NavLink to='/' className="logOutButton">Log out</NavLink>
              </div>
            </div>
    </div>
  )
}
