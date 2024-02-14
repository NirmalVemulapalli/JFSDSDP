import React, { useState } from 'react';

const Visitor = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement logic to handle the form submission
    console.log('Visitor details submitted:', { name, email });
    // For simplicity, just set isFormSubmitted to true
    setIsFormSubmitted(true);
  };

  return (
    <div>
      <h2>Visitor Form</h2>
      {isFormSubmitted ? (
        <div>
          <h3>Thank you for submitting your details!</h3>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
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

          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Visitor;
