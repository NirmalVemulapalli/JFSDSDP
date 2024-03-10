import React, { useState } from 'react';
import './Appointment.css';

const Appointment = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isAppointmentBooked, setIsAppointmentBooked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Date:', date);
    console.log('Time:', time);
    setIsAppointmentBooked(true);
    // Additional logic for handling the submission can be added here
  };

  return (
    <div>
      <h2>Book an Appointment</h2>
      {isAppointmentBooked ? (
        <div>
          <h3>Appointment Booked!</h3>
          <p>Name: {name}</p>
          <p>Date: {date}</p>
          <p>Time: {time}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />

          <button type="submit">Book Appointment</button>
        </form>
      )}
    </div>
  );
};

export default Appointment;
