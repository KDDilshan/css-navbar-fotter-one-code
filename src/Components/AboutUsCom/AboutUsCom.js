import React from 'react'
import './aboutUsCom.css'
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import { useForm } from 'react-hook-form';

export default function AboutUsCom() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <div className="aboutUsPageContainer">
      
        <div className='aboutUsContainer'>
        <div className="topic1">
          <span className="topicName1">Who We Are......?</span>
          <hr className="underline" />
        </div>
        <div className="descriptionContainer">
          <p>Welcome to the BoardSphere ! 
            This web platform is designed to simplify the process of finding 
            suitable boarding accommodations near the NSBM Campus premises.
            Whether you are a boarding house owner looking to showcase your spaces
              or a student in search of the perfect living arrangement, this platform has you covered </p>
        </div>
        <div className="topic2">
          <span className="topicName2">Meet The Team</span>
        </div>
        <div className="teamContainer">
        <div className="memberImages">
          <div className="firstRow">
            <div className="member">
            <img src="./images/janandi.jpg" alt="" className="memberImg" />
            <br></br>
            <span className="name">P.A.K .Dilshan</span>
            </div>
            <div className="member">
            <img src="./images/janandi.jpg" alt="" className="memberImg" />
            <br></br>
            <span className="name">Samarawickrama D P H J</span>
            </div>
            <div className="member">
            <img src="./images/dilshan.jpg" alt="" className="memberImg" />
            <br></br>
            <span className="name">S.M.P.J Samarakoon</span>
            </div>
          </div>
          <div className="secondRow">
            <div className="member">
            <img src="./images/pamali.jpg" alt="" className="memberImg" />
            <br></br>
            <span className="name">S.M.P.J Samarakoon</span>
            </div>
            <div className="member">
            <img src="./images/hiruni.jpg" alt="" className="memberImg" />
            <br></br>
            <span className="name">J.H.A.H.Diyanjalee</span>
            </div>
            <div className="member">
            <img src="./images/hiranya.jpg" alt="" className="memberImg" />
            <br></br>
            <span className="name">Premaratne H R K</span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    
  )
}
