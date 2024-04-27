import React, { useState } from 'react';
import Timetable from './Timetable'; // Import the Timetable component
import './Courses.css'; // Import the CSS file for styling

const Courses = () => {
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [availableCourses, setAvailableCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [step, setStep] = useState(1); // Add state to manage steps

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
    setStep(2); // Move to step 2 after submitting year and semester
  };

  const handleRegister = (course) => {
    if (!selectedCourses.find((c) => c.code === course.code)) {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const handleRemove = (courseCode) => {
    const updatedCourses = selectedCourses.filter((course) => course.code !== courseCode);
    setSelectedCourses(updatedCourses);
  };

  const handleReset = () => {
    setYear('');
    setSemester('');
    setAvailableCourses([]);
    setSelectedCourses([]);
    setStep(1); // Reset step to 1 when resetting the form
  };

  const handleViewTimetable = () => {
    setStep(3); // Move to step 3 to view timetable
  };

  return (
    <div className="container red-theme">
      <h2 className="center-content">Courses</h2>
      {step === 1 && (
        <form className="light-red-background" onSubmit={handleSubmit}>
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
          <button className="submit-btn red-btn" type="submit">Submit</button>
          <button className="reset-btn red-btn" type="reset" onClick={handleReset}>Reset</button>
        </form>
      )}
      
      {step === 2 && availableCourses.length > 0 && (
        <div>
          <h3 className="center-content">Available Courses for Semester {semester}:</h3>
          <table className="center-content">
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
                  <td>
                    {selectedCourses.find((c) => c.code === course.code) ? (
                      <button className="remove-btn red-btn" onClick={() => handleRemove(course.code)}>Remove</button>
                    ) : (
                      <button className="register-btn red-btn" onClick={() => handleRegister(course)}>Register</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="submit-btn red-btn" onClick={handleViewTimetable}>Submit Course Selection</button>
        </div>
      )}
      
      {step === 3 && selectedCourses.length > 0 && (
        <div>
          <h3 className="center-content">Selected Courses:</h3>
          <ul className="center-content">
            {selectedCourses.map((course, index) => (
              <li key={index}>{course.name} ({course.code})</li>
            ))}
          </ul>
          <button className="submit-btn red-btn" onClick={handleViewTimetable}>View Timetable</button>
        </div>
      )}

      {/* Render the Timetable component in step 3 */}
      {step === 3 && <Timetable selectedCourses={selectedCourses} />}
    </div>
  );
};

export default Courses;
