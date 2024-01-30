import React from 'react'
import './aboutUs.css'
import AboutUsCom from '../../Components/AboutUsCom/AboutUsCom'
import NavBar from '../../Components/NavigationBar/NavBar'
import Footer from '../../Components/Footer/Footer'

export default function AboutUs() {
  return (
    <div>
      <NavBar/>
      <AboutUsCom/>
      <Footer/>
    </div>
  )
}
