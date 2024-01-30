import React, { useState, useEffect } from 'react';
import './adminCom.css';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function AdminCom() {
  const [userId, setUserID] = useState(null);
  const [formData, setFormData] = useState({
    description: '',
    imageUrl: '',
    location: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const getUserIdFromToken = (token) => {
      try {
        const decoded = jwtDecode(token);
        return decoded.userId;
      } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
    };

    const token = localStorage.getItem('accessToken');
    const userIdFromToken = getUserIdFromToken(token);

    setUserID(userIdFromToken);
  }, []);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLocationClick = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setFormData((prevData) => ({
          ...prevData,
          location: `(${latitude}, ${longitude})`,
        }));
      },
      (error) => {
        console.error('Error getting location:', error.message);
      }
    );
  };

  const onSubmit = async () => {
    try {
      const userID = userId;

      const response = await fetch('http://localhost:4000/ownerForm/saveProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userID,
          description: formData.description,
          imageUrl: formData.imageUrl,
          location: formData.location,
        }),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        navigate('/');
      } else {
        console.error('Failed to submit form');
        console.log(response);
      }
    } catch (error) {
      console.log('Error submitting form:', error);
    }
  };

  return (
    <div className='panelContainer'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputs">
          <div className="imagesInput">
            <label className='inputName'>Image URL*</label>
            <div className="ImageInput">
              <input
                type="text"
                name="imageUrl"
                placeholder="Enter Image URL"
                value={formData.imageUrl}
                onChange={handleFormChange}
                {...register('imageUrl', {
                  required: 'Image URL is required',
                  pattern: {
                    value: /^(ftp|http|https):\/\/[^ "]+$/,
                    message: 'Enter a valid URL',
                  },
                })}
              />
              <img src={formData.imageUrl} alt='' />
            </div>
            <span className="error-message">{errors.imageUrl && errors.imageUrl.message}</span>
          </div>
          <div className="descriptionInput">
            <label className='inputDescription'>Description*</label>
            <textarea
              className='desInput'
              name='description'
              onChange={handleFormChange}
              wrap="off"
              placeholder="Type your text here"
            />
          </div>
          <div className="locationInput">
            <label className='inputLocation'>Location*</label>
            <div className="LocationInput">
              <input
                type='text'
                placeholder='Add Your Location'
                className='locInput'
                value={formData.location}
                onChange={handleFormChange}
                {...register('location')}
              />
              <button type="button" onClick={handleLocationClick}>
                Get Current Location
              </button>
            </div>
          </div>
        </div>
        <div className="submitButton">
          <button type="submit" className='button'>Submit</button>
        </div>
      </form>
    </div>
  );
}
