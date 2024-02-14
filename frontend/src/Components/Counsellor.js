import React from 'react';

const Counsellor = () => {
  const counsellorDetails = {
    name: '',
    specialization: 'Family Counselling',
    contactNumber: '123-456-7890',
    email: 'nanasahastra@example.com',
  };

  return (
    <div>
      <h2>Counsellor Profile</h2>
      <div>
        <h3>{counsellorDetails.name}</h3>
        <p>Specialization: {counsellorDetails.specialization}</p>
        <p>Contact Number: {counsellorDetails.contactNumber}</p>
        <p>Email: {counsellorDetails.email}</p>
      </div>
    </div>
  );
};

export default Counsellor;
