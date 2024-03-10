import React, { useState } from 'react';
import './AppointmentForm.css'; // Import the CSS file for styling

const AppointmentForm = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Date:', date);
    console.log('Time:', time);
    setName('');
    setDate('');
    setTime('');
  };

  return (
    <div className="appointment-container">
      <h1>Appointment Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name:</span>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          <span>Date:</span>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <br />
        <label>
          <span>Time:</span>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AppointmentForm;