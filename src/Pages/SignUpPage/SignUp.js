import React from 'react'
import './signup.css'
import SignUpRight from '../../Components/SignUpComps/SignUpRight'
import SignUpLeft from '../../Components/SignUpComps/SignUpLeft'
import NavBar from '../../Components/NavigationBar/NavBar'
import Footer from '../../Components/Footer/Footer'

export default function SignUp() {
  return (
    <div>
      <NavBar/>
      <div className='pageContainer'>
        <SignUpLeft/>
        <SignUpRight/>
      </div>
      <Footer/>
    </div>
    
  )
}
