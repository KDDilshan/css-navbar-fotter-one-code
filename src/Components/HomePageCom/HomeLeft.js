import React from 'react'
import './homeLeft.css'


export default function HomeLeft() {
  return (
    <div className='uniCardContainer'>
      <li className="uniList">
        <div className="uniCardTop">
            <label className='nameUni'>NSBM</label>
        </div>
        <div className="uniCardBottom">
            <a href='/BoardingPage'><img src="./images/nsbm.jpg" alt="" className="uniImage" /></a>
        </div>
      </li>
      <li className="uniList">
        <div className="uniCardTop">
            <label className='nameUni'>CINEC</label>
        </div>
        <div className="uniCardBottom">
            <img src="./images/cinec2.jpg" alt="" className="uniImage" />
        </div>
      </li>
      <li className="uniList">
        <div className="uniCardTop">
            <label className='nameUni'>SLIIT</label>
        </div>
        <div className="uniCardBottom">
            <img src="./images/SLIIT.jpg" alt="" className="uniImage" />
        </div>
      </li>
      <li className="uniList">
        <div className="uniCardTop">
            <label className='nameUni'>NIBM</label>
        </div>
        <div className="uniCardBottom">
            <img src="./images/nibmImg.jpg" alt="" className="uniImage" />
        </div>
      </li>
      
    </div>
  )
}
