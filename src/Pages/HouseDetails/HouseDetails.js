import React from 'react'
import './houseDetails.css'
import TopLeft from '../../Components/HouseDetailsCom/PageTop/TopLeft'
import TopRight from '../../Components/HouseDetailsCom/PageTop/TopRight'
import PageBottom from '../../Components/HouseDetailsCom/PageBottom/PageBottom'
import NavBar from '../../Components/NavigationBar/NavBar'
import Topic from '../../Components/HouseDetailsCom/PageTop/Topic'
import Footer from '../../Components/Footer/Footer'
import UserForm from '../../Components/HouseDetailsCom/PageBottom/userForm'

export default function HouseDetails() {
  return (
    <div>
      <NavBar/>
      <Topic/>
      <div className='topContainer'>
        <TopLeft/>
        <TopRight/>
      </div>
      <div className='bottomContainer'>
        <PageBottom/>
        <UserForm/>
      </div>
      <Footer/>
    
    </div>
    
   
  )
}