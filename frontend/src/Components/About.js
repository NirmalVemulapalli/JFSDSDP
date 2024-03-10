import React from 'react';
import './About.css'; // Import CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h2>About Our Online Timetable Management System</h2>
      <p>
        Our Online Timetable Management system provides an efficient solution for students to manage their course schedules. With our platform, students can easily browse through available courses and select the ones that fit their preferences and academic requirements.
      </p>
      <p>
        One of the key features of our system is its dynamic timetable generation. Once students have selected their courses, our system automatically generates a personalized timetable based on their selections. This timetable provides a clear overview of when each course is scheduled, enabling students to plan their study time effectively.
      </p>
      <p>
        Our platform aims to streamline the process of course selection and timetable management, making it convenient for students to organize their academic schedules. By providing a user-friendly interface and efficient timetable generation, we strive to enhance the overall experience of students in managing their courses and study commitments.
      </p>
    </div>
  );
};

export default About;
