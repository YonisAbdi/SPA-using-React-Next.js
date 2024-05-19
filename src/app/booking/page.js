"use client";

import React, { useState, useEffect } from 'react';
import { useAuth } from '../../Components/AuthContext';
import { useRouter } from 'next/navigation';
import styles from './booking.module.css';

const Bookings = () => {
  const { user, sessions, addSession } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    translator: '',
    date: '',
    time: ''
  });
  const [translators, setTranslators] = useState([]);
  const [selectedTranslator, setSelectedTranslator] = useState(null);
  const [confirmation, setConfirmation] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTranslators = async () => {
      try {
        const response = await fetch('https://6648dd804032b1331beca45e.mockapi.io/endpoint/translators/translator');
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log('API Response:', data);
        if (Array.isArray(data)) {
          setTranslators(data);
        } else {
          setError('Failed to fetch translators: API response is not an array');
        }
      } catch (error) {
        console.error('Failed to fetch translators:', error);
        setError('Failed to fetch translators: ' + error.message);
      }
    };

    fetchTranslators();
  }, []);

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));

    if (name === 'translator') {
      const translator = translators.find(trans => trans.name === value);
      setSelectedTranslator(translator);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const session = { ...formData, customer: user.username, translator: selectedTranslator.name };
    addSession(session);
    setConfirmation('Your session has been booked successfully.');
    setFormData({ translator: '', date: '', time: '' });
  };

  if (!user) {
    return null; // or loading spinner
  }

  if (error) {
    return <p>{error}</p>;
  }

  const customerSessions = sessions.filter(session => session.customer === user.username);
  const workerSessions = sessions.filter(session => session.translator === user.name);

  return (
    <div className={styles.container}>
      <h1>{user.role === 'customer' ? 'Book Your Appointment' : 'Your Sessions'}</h1>
      {user.role === 'customer' ? (
        <>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="translator">Translator:</label>
              <select
                name="translator"
                value={formData.translator}
                onChange={handleChange}
                className={styles.input}
              >
                <option value="">Select a translator</option>
                {Array.isArray(translators) && translators.map(translator => (
                  <option key={translator.id} value={translator.name}>
                    {translator.name} ({translator.language})
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="time">Time:</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <button type="submit" className={styles.button}>Book Now</button>
            {confirmation && <p>{confirmation}</p>}
          </form>
          <div className={styles.sessionListContainer}>
            <h2>Your Booked Sessions</h2>
            <ul className={styles.sessionList}>
              {customerSessions.map((session, index) => (
                <li key={index} className={styles.sessionItem}>
                  {session.date} at {session.time} with {session.translator}
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div className={styles.sessionListContainer}>
          <h2>Your Scheduled Sessions</h2>
          <ul className={styles.sessionList}>
            {workerSessions.map((session, index) => (
              <li key={index} className={styles.sessionItem}>
                {session.date} at {session.time} with {session.customer}
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedTranslator && (
        <div>
          <h2>Reviews for {selectedTranslator.name}</h2>
          <ul>
            {selectedTranslator.reviews.map((review, index) => (
              <li key={index}>
                <strong>{review.reviewer}:</strong> {review.comment}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Bookings;
