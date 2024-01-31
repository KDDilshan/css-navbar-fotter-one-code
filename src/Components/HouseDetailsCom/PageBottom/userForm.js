import React from 'react'
import './userForm.css'
import {useState} from 'react'
import {FaStar} from 'react-icons/fa'

export default function UserForm() {
    const [rating, setRating] = useState (null);
    const [hover, setHover] = useState (null);

    const [formData, setFormData] = useState({
        comment: '',
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
      const handleSubmit = async(event) => {
        event.preventDefault();
         console.log('Form submitted');

        try {
            const response = await fetch('http://localhost:4000/review/api/addReview', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
      
            if (response.ok) {
              alert('Form submitted successfully');
              // Optionally, you can handle the success response from the backend
            } else {
              alert('Failed to submit form');
              // Optionally, you can handle the error response from the backend
            }
          } catch (error) {
            console.log('Error submitting form:', error);
            // Handle other potential errors, such as network issues
          }
      
        };
  return (
    <div className='userFormContainer'>
      <form onSubmit={handleSubmit}>
        <div className="topicContainer">
            <label>How is your experience so far ?</label>
        </div>
        <div className="commentStarRating">
                {[...Array(5)].map((star,index) => {
                    const currentRating = index +1;
                    return (
                        <label>
                            <input type='radio'
                            className='buttonStyle' 
                            name='rating' 
                            value={currentRating} 
                            onClick={()=> setRating(currentRating)}
                            />
                            <FaStar size={25} className='starIcon'
                            color={currentRating <= (hover || rating) ? "#ffc107":"#e4e5e9"}
                            onMouseEnter={()=> setHover(currentRating)}
                            onMouseLeave={()=>setHover(null)}
                            />
                        </label>
                    );
                })}
                {rating}
            </div>
        <textarea rows="4" cols="50" placeholder='Add your Comment' name='description' onChange={handleChange} className='inputComment'/>
        <div className="subButtonContainer">
            <button type="submit"  className='submitBtn'>Submit</button>
          
        </div>
      </form>
    </div>
  )
}