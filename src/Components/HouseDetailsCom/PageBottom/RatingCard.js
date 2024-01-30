import React, { useState, useEffect } from 'react';
import './ratingCard.css';
import { FaStar } from 'react-icons/fa';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export default function RatingCard() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [description, setDescription] = useState('');
  const [reviews, setReviews] = useState([]);

  // Assuming you have a function to fetch reviews from the backend
  const fetchReviews = async () => {
    try {
      const response = await fetch('/api/getReview');
      if (response.ok) {
        const data = await response.json();
        setReviews(data);
      } else {
        console.error('Failed to fetch reviews');
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Assuming you have a function to make the API request to your backend
    try {
      const response = await fetch('/api/addReview', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: 'your_user_id', // replace with actual user ID
          houseId: 'your_house_id', // replace with actual house ID
          rating: rating,
          description: description,
        }),
      });

      if (response.ok) {
        // Handle success, maybe show a success message to the user
        console.log('Review submitted successfully');
        // Fetch reviews again to update the displayed reviews
        fetchReviews();
      } else {
        // Handle error, maybe show an error message to the user
        console.error('Failed to submit review');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div className='pageContainer'>
      <div className='reviewsContainer'>
        {reviews.map((review, index) => (
          <div key={index} className='reviewBox'>
            <div className='reviewStars'>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} color={i < review.Rating ? '#ffc107' : '#e4e5e9'} />
              ))}
            </div>
            <div className='reviewDetails'>
              <AccountCircleOutlinedIcon />
              <span className='reviewUserName'>{review.UserName}</span>
              <p className='reviewDescription'>{review.ReviewDescription}</p>
            </div>
          </div>
        ))}
      </div>
      <form className='formContainer' onSubmit={handleSubmit}>
        <div className="starRating">
          {[...Array(5)].map((_, index) => {
            const currentRating = index + 1;
            return (
              <label key={index}>
                <input
                  type='radio'
                  className='buttonStyle'
                  name='rating'
                  value={currentRating}
                  onChange={() => setRating(currentRating)}
                />
                <FaStar
                  className='star'
                  color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </div>
        <textarea
          placeholder="Add your comments..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}
