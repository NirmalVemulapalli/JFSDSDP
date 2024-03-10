import React, { useState } from 'react';
import Timetable from './Timetable'; // Import the Timetable component

const Courses = () => {
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [availableCourses, setAvailableCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [showTimetable, setShowTimetable] = useState(false); // New state to toggle timetable visibility

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleSemesterChange = (e) => {
    setSemester(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Fetch courses based on selected year and semester
    // This is a mock example, replace with actual API call
    if (year === '1') {
      if (semester === '1') {
        setAvailableCourses([
          { name: 'Programming in C', code: 'CSE101' },
          { name: 'Digital Logic', code: 'CSE102' },
          { name: 'Engineering Mathematics', code: 'MAT101' },
          { name: 'Physics', code: 'PHY101' },
          { name: 'Communicative English', code: 'ENG101' }
        ]);
      } else if (semester === '2') {
        setAvailableCourses([
          { name: 'Data Structures', code: 'CSE201' },
          { name: 'Computer Organization and Architecture', code: 'CSE202' },
          { name: 'Engineering Mathematics II', code: 'MAT102' },
          { name: 'Environmental Science', code: 'ENV101' },
          { name: 'Professional Communication', code: 'ENG102' }
        ]);
      }
    } else if (year === '2') {
      if (semester === '1') {
        setAvailableCourses([
          { name: 'PSRS', code: 'CSE301' },
          { name: 'PSQT', code: 'CSE302' },
          { name: 'PYTHON', code: 'CSE303' },
          { name: 'OPERATING SYSTEM', code: 'CSE304' },
          { name: 'ASE', code: 'CSE305' }
        ]);
      } else if (semester === '2') {
        setAvailableCourses([
          { name: 'MP', code: 'CSE401' },
          { name: 'ESE', code: 'CSE402' },
          { name: 'MERN', code: 'CSE403' },
          { name: 'ATFL', code: 'CSE404' },
          { name: 'DAA', code: 'CSE405' }
        ]);
      }
    } else if (year === '3') {
      if (semester === '1') {
        setAvailableCourses([
          { name: 'Advanced Algorithms', code: 'CSE501' },
          { name: 'Database Management Systems', code: 'CSE502' },
          { name: 'Computer Networks', code: 'CSE503' },
          { name: 'Software Engineering', code: 'CSE504' },
          { name: 'Web Technologies', code: 'CSE505' }
        ]);
      } else if (semester === '2') {
        setAvailableCourses([
          { name: 'Artificial Intelligence', code: 'CSE601' },
          { name: 'Distributed Systems', code: 'CSE602' },
          { name: 'Machine Learning', code: 'CSE603' },
          { name: 'Mobile Computing', code: 'CSE604' },
          { name: 'Cloud Computing', code: 'CSE605' }
        ]);
      }
    } else if (year === '4') {
      if (semester === '1') {
        setAvailableCourses([
          { name: 'Cyber Security', code: 'CSE701' },
          { name: 'Data Science', code: 'CSE702' },
          { name: 'Information Retrieval', code: 'CSE703' },
          { name: 'Blockchain Technology', code: 'CSE704' },
          { name: 'Big Data Analytics', code: 'CSE705' }
        ]);
      } else if (semester === '2') {
        setAvailableCourses([
          { name: 'Internet of Things', code: 'CSE801' },
          { name: 'Natural Language Processing', code: 'CSE802' },
          { name: 'Virtual Reality', code: 'CSE803' },
          { name: 'Augmented Reality', code: 'CSE804' },
          { name: 'Deep Learning', code: 'CSE805' }
        ]);
      }
    }
  };

  const handleRegister = (course) => {
    setSelectedCourses([...selectedCourses, course]);
    setShowTimetable(false); // Reset showTimetable state to false when registering a new course
  };

  const handleReset = () => {
    setYear('');
    setSemester('');
    setAvailableCourses([]);
    setSelectedCourses([]);
    setShowTimetable(false); // Reset showTimetable state to false when resetting the form
  };

  const handleViewTimetable = () => {
    setShowTimetable(true); // Set the state to true to show the timetable
  };

  return (
    <div>
      <h2>Courses</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="year">Select Year:</label>
          <select id="year" value={year} onChange={handleYearChange} required>
            <option value="">Select Year</option>
            <option value="1">Year 1</option>
            <option value="2">Year 2</option>
            <option value="3">Year 3</option>
            <option value="4">Year 4</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="semester">Select Semester:</label>
          <select id="semester" value={semester} onChange={handleSemesterChange} required>
            <option value="">Select Semester</option>
            <option value="1">Semester 1</option>
            <option value="2">Semester 2</option>
          </select>
        </div>
        <button type="submit">Submit</button>
        <button type="reset" onClick={handleReset}>Reset</button>
      </form>
      
      {(year !== '' && semester !== '') && ( // Render if year and semester are selected
        <div>
          <h3>Available Courses for Semester {semester}:</h3>
          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {availableCourses.map((course, index) => (
                <tr key={index}>
                  <td>{course.name} ({course.code})</td>
                  <td><button onClick={() => handleRegister(course)}>Register</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      {selectedCourses.length > 0 && (
        <div>
          <h3>Selected Courses:</h3>
          <ul>
            {selectedCourses.map((course, index) => (
              <li key={index}>{course.name} ({course.code})</li>
            ))}
          </ul>
          <button onClick={handleViewTimetable}>View Timetable</button>
        </div>
      )}

      {/* Conditionally render the Timetable component */}
      {showTimetable && <Timetable selectedCourses={selectedCourses} />}
    </div>
  );
};

export default Courses;
