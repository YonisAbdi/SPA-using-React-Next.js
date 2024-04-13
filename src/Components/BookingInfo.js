"use client";

import { useState, useEffect } from 'react';
import styles from './BookingInfo.module.css';

const BookingInfo = () => {
  const [bookingData, setBookingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        console.log('Fetching booking data...');
        const response = await fetch('https://your-mockapi-url/bookings'); // Replace with your MockAPI URL
        console.log('Response:', response);
        if (!response.ok) {
          throw new Error('Failed to fetch booking data');
        }
        const data = await response.json();
        setBookingData(data);
      } catch (error) {
        console.error('Fetch error:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookingData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.bookingInfo}>
      <h2>Available Translators</h2>
      <ul>
        {bookingData.translators.map((translator, index) => (
          <li key={index}>
            {translator.name} - {translator.language}
          </li>
        ))}
      </ul>
      <h2>Booking Information</h2>
      <ul>
        {bookingData.bookings.map((booking, index) => (
          <li key={index}>
            {booking.date} - {booking.time} - {booking.client}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingInfo;
