"use client";

import { useState } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review) {
      setReviews([...reviews, review]);
      setReview('');
    }
  };

  return (
    <div>
      <h2>Reviews</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Review:</label>
          <input
            type="text"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <ul>
        {reviews.map((rev, index) => (
          <li key={index}>{rev}</li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
