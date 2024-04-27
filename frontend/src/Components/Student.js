import React, { useState } from 'react';
import './Student.css'; // Import CSS file
import axios from 'axios'; // Import axios for making HTTP requests

const Student = () => {
  const [studentDetails, setStudentDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    course: '',
    semester: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Ensure semester value is between 1 and 8
    if (name === 'semester' && (value < 1 || value > 8)) {
      // You can add error handling here, like showing an error message
      return;
    }
    setStudentDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    // Send studentDetails to MongoDB
    axios.post('http://localhost:8085/Students', studentDetails) // Adjust the URL to your server endpoint
      .then(response => {
        console.log('Student details submitted successfully:', response.data);
      })
      .catch(error => {
        console.error('Error submitting student details:', error);
      });
  };

  return (
    <div className="student-container">
      {formSubmitted ? (
        <div className="student-details-box">
          <h2>Student Details</h2>
          <table>
            <tbody>
              <tr>
                <td className="student-details-heading">Name:</td>
                <td>{studentDetails.firstName} {studentDetails.lastName}</td>
              </tr>
              <tr>
                <td className="student-details-heading">Email:</td>
                <td>{studentDetails.email}</td>
              </tr>
              <tr>
                <td className="student-details-heading">Course:</td>
                <td>{studentDetails.course}</td>
              </tr>
              <tr>
                <td className="student-details-heading">Semester:</td>
                <td>{studentDetails.semester}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <h2>Student Details Form</h2>
          <form className="student-form" onSubmit={handleSubmit}>
            <table>
              <tbody>
                <tr>
                  <td><label htmlFor="firstName">First Name:</label></td>
                  <td><input type="text" id="firstName" name="firstName" value={studentDetails.firstName} onChange={handleChange} required /></td>
                </tr>
                <tr>
                  <td><label htmlFor="lastName">Last Name:</label></td>
                  <td><input type="text" id="lastName" name="lastName" value={studentDetails.lastName} onChange={handleChange} required /></td>
                </tr>
                <tr>
                  <td><label htmlFor="email">Email:</label></td>
                  <td><input type="email" id="email" name="email" value={studentDetails.email} onChange={handleChange} required /></td>
                </tr>
                <tr>
                  <td><label htmlFor="course">Course:</label></td>
                  <td><input type="text" id="course" name="course" value={studentDetails.course} onChange={handleChange} required /></td>
                </tr>
                <tr>
                  <td><label htmlFor="semester">Semester:</label></td>
                  <td>
                    <select id="semester" name="semester" value={studentDetails.semester} onChange={handleChange} required>
                      <option value="">Select Semester</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((semester) => (
                        <option key={semester} value={semester}>{semester}</option>
                      ))}
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Student;
