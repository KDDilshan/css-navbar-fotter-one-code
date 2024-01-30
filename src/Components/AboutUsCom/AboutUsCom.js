import React from 'react'
import './aboutUsCom.css'
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';

export default function AboutUsCom() {
  return (
    <div className='aboutUsContainer'>
      <div className="topic1">
        <span className="topicName1">Who We Are......?</span>
      </div>
      <div className="descriptionContainer">
        <p>Welcome to the NSBM Boarding House Finder project repository! 
          This web platform is designed to simplify the process of finding 
          suitable boarding accommodations near the NSBM Campus premises.
           Whether you are a boarding house owner looking to showcase your spaces
            or a student in search of the perfect living arrangement, this platform has you covered </p>
      </div>
      <div className="topic2">
        <span className="topicName2">GET TO KNOWN US</span>
      </div>
      <div className="memberImages">
        <div className="firstRow">
        <AccountBoxTwoToneIcon className='memberIcon'/>
        <AccountBoxTwoToneIcon className='memberIcon'/>
        <AccountBoxTwoToneIcon className='memberIcon'/>
        </div>
        <div className="secondRow">
        <AccountBoxTwoToneIcon className='memberIcon'/>
        <AccountBoxTwoToneIcon className='memberIcon'/>
        <AccountBoxTwoToneIcon className='memberIcon'/>
        </div>
      </div>
    </div>
  )
}
