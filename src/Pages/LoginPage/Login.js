import React from 'react'
import './login.css'
import LoginRight from '../../Components/LogingComps/LoginRight'
import LoginLeft from '../../Components/LogingComps/LoginLeft'
import NavBar from '../../Components/NavigationBar/NavBar'
import Footer from '../../Components/Footer/Footer'

export default function Login() {
  return (
    <div>
      <NavBar/>
      <div className='loginPageContainer'>
        <LoginLeft/>
        <LoginRight/>
      </div>
      <Footer/>
    </div>
    
  )
}
