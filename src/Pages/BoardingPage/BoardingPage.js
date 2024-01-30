import React from 'react'
import './boardingPage.css'
import BoardingLeft from '../../Components/BoardingPageCom/BoardingLeft'
import BoardingRight from '../../Components/BoardingPageCom/BoardingRight'
import NavBar from '../../Components/NavigationBar/NavBar'
import Footer from '../../Components/Footer/Footer'

export default function BoardingPage() {
  return (
    <div>
      <NavBar/>
      <div className='BoardingPaneContainer'>
        <BoardingLeft/>
        <BoardingRight/>
      </div>
      <Footer/>
    </div>
    
  )
}
