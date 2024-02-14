import React, { useState } from 'react';

const Appointment = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isAppointmentBooked, setIsAppointmentBooked] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement logic to handle the appointment submission
    console.log('Appointment submitted:', { name, date, time });
    
    // For simplicity, just set isAppointmentBooked to true
    setIsAppointmentBooked(true);
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
        <form onSubmit={handleFormSubmit}>
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
