// Timetable.js
import React from 'react';

const Timetable = ({ selectedCourses }) => {
  const startTime = 9; // Start time for classes
  const minRoomNumber = 101; // Minimum room number
  const maxRoomNumber = 125; // Maximum room number

  // Function to generate a random room number within the specified range
  const getRandomRoomNumber = () => {
    return Math.floor(Math.random() * (maxRoomNumber - minRoomNumber + 1)) + minRoomNumber;
  };

  return (
    <div className="timetable-container">
      <h2>Timetable</h2>
      <table className="Timetable">
        <thead>
          <tr>
            <th>Course S.No</th>
            <th>Course Name</th>
            <th>Course Code</th>
            <th>Schedule Time</th>
            <th>Room Number</th>
          </tr>
        </thead>
        <tbody>
          {selectedCourses.map((course, index) => {
            const scheduleTime = `${startTime + index}:00 - ${startTime + index + 1}:00`; // Calculate schedule time
            const roomNumber = getRandomRoomNumber(); // Generate random room number
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{course.name}</td>
                <td>{course.code}</td>
                <td>{scheduleTime}</td>
                <td>{`C${roomNumber}`}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Timetable;
