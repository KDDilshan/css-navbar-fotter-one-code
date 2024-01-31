import React from 'react'
import './adminPanel.css'
import NavBar from '../../Components/NavigationBar/NavBar'
import AdminCom from '../../Components/AdminCom/AdminCom'
import Footer from '../../Components/Footer/Footer'

export default function AdminPanel() {
  return (
    <div>
      <NavBar/>
      <AdminCom/>
      <Footer/>
    </div>
  )
}
