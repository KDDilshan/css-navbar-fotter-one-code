import React, { useState } from 'react';
import './signUpRight.css';
import { useNavigate } from 'react-router-dom';

export default function SignUpRight() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    password: '',
    role: '',
    gender: '',
    location: '',
    contactNo: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/form/api/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');

        navigate('/Login');

        // Optionally, you can handle the success response from the backend
      } else {
        console.error('Failed to submit form');
        // Optionally, you can handle the error response from the backend
      }
    } catch (error) {
      console.log('Error submitting form:', error);
      // Handle other potential errors, such as network issues
    }
  };

  return (
    <div className='FormContainer'>
      <form onSubmit={handleSubmit}>
        <div className="formTopic">
          <span className="topic">Sign Up</span>
        </div>
        <div className="formBox">
          <div className="inputs">
            <div className="inputItem">
              <span className="inputName">Name</span>
              <input type="text" className="input" name='name' value={formData.name} onChange={handleChange}/>
            </div>
            <div className="inputItem">
              <span className="inputPassword">Password</span>
              <input type="password" className="input" name='password' value={formData.password} onChange={handleChange}/>
            </div>
            <div className="inputItem">
              <span className="inputRole">Role</span>
              <label className='userInput'>
                User
                <input type="radio" name='role' value='user' checked={formData.role === 'user'} onChange={handleChange}/>
              </label>
              <label className='ownerInput'>
                Owner
                <input type="radio" name='role' value='owner' checked={formData.role === 'owner'} onChange={handleChange}/>
              </label>
            </div>
            <div className="inputItem">
              <span className="inputRole">Gender</span>
              <label className='maleInput'>Male
                <input type="radio" name='gender' value='male' checked={formData.gender === 'male'} onChange={handleChange}/>
              </label>
              <label className='femaleInput'>Female
                <input type="radio" name='gender' value='female' checked={formData.gender === 'female'} onChange={handleChange}/>
              </label>
            </div>
            <div className="inputItem">
              <span className="inputLocation">Location</span>
              <input type="text" className="input" name='location' value={formData.location} onChange={handleChange}/>
            </div>
            <div className="inputItem">
              <span className="inputContactNo">Contact No.</span>
              <input type="text" className="input" name='contactNo' value={formData.contactNo} onChange={handleChange}/>
            </div>
          </div>
          <button type="submit" className="signupbtn button">Sign Up</button>
        </div>
      </form>
    </div>
  );
}
