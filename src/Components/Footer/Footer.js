import React from 'react'
import './footer.css'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Footer() {
  return (
    <div className="Footer">
      <div className="footerContainer">
        <div className="footerTop">
          <div className="topLeft">
              <div className="topic">
                <span className="topicName">| Quick links</span>
              </div>
              <div className="content">
                <div className='home'>
                  <DoubleArrowIcon/>
                  <span className="contentTopic">Home</span>
                </div>
                <div className='about'>
                  <DoubleArrowIcon/>
                  <span className="contentTopic">About</span>
                </div>
              </div>
          </div>
          <div className="topMiddle">
            <div className="topic">
              <span className="topicName">| Contact Details</span>
            </div>
            <div className="content">
              <DoubleArrowIcon/>
              <span className="number">075 7213 455</span>
            </div>
          </div>
          <div className="topRight">
            <div className="topic">
              <span className="topicName">| mail us on</span>
            </div>
            <div className="content">
              <DoubleArrowIcon/>
              <span className="mail">hey@bodima.lk</span>
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <div className="icons">
            <div className="icon">
              <FacebookIcon/>
            </div>
            <div className="icon">
              <TwitterIcon/>
            </div>
            <div className="icon">
              <InstagramIcon/>
            </div>
          </div>
          <div className="copyRight">
              <CopyrightIcon className='copyRightIcon'/>
              <span className="copyRightMessage">All right Reserved.      campus bodima</span>
          </div>
        </div>
      </div>
    </div>
  )
}
