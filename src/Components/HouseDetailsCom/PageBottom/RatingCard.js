import React, { useState, useEffect } from 'react';
import './ratingCard.css';
import { FaStar } from 'react-icons/fa';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export default function RatingCard() {
    const [reviews, setReviews] = useState([]);
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    useEffect(() => {
        // Fetch reviews when the component mounts
        const fetchReviews = async () => {
            try {
                const response = await fetch('http://localhost:4000/reviews/api/getReview');
                if (response.ok) {
                    const reviewsData = await response.json();
                    setReviews(reviewsData);
                } else {
                    console.error('Failed to fetch reviews');
                }
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchReviews();
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    return (
        <div>
            {reviews.map((review) => (
                <div key={review.ReviewID} className='cardContainer'>
                    <div className="cardTop">
                        <div className="userDetail">
                            <AccountCircleOutlinedIcon />
                            <div className="userName">
                                <span className="name">{review.UserName}</span>
                            </div>
                        </div>
                        <div className="starRating">
                            {[...Array(5)].map((star, index) => {
                                const currentRating = index + 1;
                                return (
                                    <label key={index}>
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
                    </div>
                    <div className="cardBottom">
                        <p>{review.Comment}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
