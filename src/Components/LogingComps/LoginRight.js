import React, { useState } from 'react';
import './loginRight.css';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

export default function LoginRight() {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/form/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.text();

        // Store the token in local storage
        localStorage.setItem('accessToken', data);

        // Set the welcome message
        setWelcomeMessage(`Welcome, ${loginData.username}!`);
        // Clear any previous error messages
        setErrorMessage('');
        
        // Optionally, you can handle the success response from the backend
      } else {
        const errorData = await response.json(); // Assuming your server sends JSON error messages

        console.error('Failed to Login:', errorData.message);
        setErrorMessage(errorData.message);
      }
    } catch (error) {
      console.log('Error Login:', error);
      // Handle other potential errors, such as network issues
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="registerPage">
      <form onSubmit={handleSubmit}>
        {welcomeMessage && (
          <div className="welcomeMessage">
            {welcomeMessage} - You can now navigate to the <a href="/">Main Page</a>
          </div>
        )}
        {errorMessage && (
          <div className="errorMessage">
            {errorMessage}
          </div>
        )}
        <div className="signUpBox">
          <div className="signUpBoxTop">
            <img src="/images/signupimg.png" alt="" className="signUpImg" />
            <br />
            <span className="welcomText">WELCOME</span>
          </div>
          <div className="userInputs">
            <div className="userInput">
              <span className="userName">Username</span>
              <br />
              <div className="nameInputContainer">
                <PersonIcon />
                <input
                  type="text"
                  name="username"
                  value={loginData.username}
                  onChange={handleChange}
                  className="nameInput"
                />
              </div>
              <br />
              <span className="password">Password</span>
              <br />
              <div className="passwordContainer">
                <LockIcon />
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                  className="passwordInput"
                />
              </div>
              <div className="buttonContainer">
                <button type="submit" className="button">
                  SignUp
                </button>
              </div>
              <div className="signUpLink">
                Don't have an account <a href="/Signup">SignUp</a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
