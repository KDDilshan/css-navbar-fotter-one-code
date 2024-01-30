import React from 'react'
import './adminPanel.css'
import LoginNavbar from '../../Components/LogiNavbar/LoginNavbar'
import AdminCom from '../../Components/AdminCom/AdminCom'
import Footer from '../../Components/Footer/Footer'

export default function AdminPanel() {
  return (
    <div>
      <LoginNavbar/>
      <AdminCom/>
      <Footer/>
    </div>
  )
}
