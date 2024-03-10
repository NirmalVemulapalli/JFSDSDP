import React from 'react';

function Hello(props) {
  return (
    <div>
      <h1 style={{textAlign: 'left'}}>Online TimeTable Management {props.name}</h1>
      <div style={{textAlign: 'left'}}>
        <p>
          Welcome to our Online TimeTable Management System! This project aims to revolutionize how students manage their schedules. 
          With our system, students can easily access their timetables, view class schedules, and stay organized throughout the semester.
        </p>
        <p>
          <strong>Features include:</strong>
        </p>
        <ul>
          <li>Personalized timetables for each student</li>
          <li>Integration with course registration systems</li>
          <li>Real-time updates and notifications</li>
          <li>Mobile-friendly design for accessibility on the go</li>
        </ul>
        <p>
          We're dedicated to simplifying the scheduling process and helping students make the most of their time. 
          Thank you for choosing our Online TimeTable Management System!
        </p>
      </div>
    </div>
  );
}

export default Hello;
