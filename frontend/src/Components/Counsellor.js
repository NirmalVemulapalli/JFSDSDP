import React, { useState } from 'react';

// Sample data for counsellors
const counsellors = [
  { id: 1, name: "John Doe", department: "CSE", year: 1, feedback: "Excellent", experience: "5 years", qualification: "Ph.D. in Computer Science" },
  { id: 2, name: "Jane Smith", department: "CSE", year: 1, feedback: "Good", experience: "4 years", qualification: "Master's in Software Engineering" },
  { id: 3, name: "Alice Johnson", department: "CSE", year: 2, feedback: "Average", experience: "3 years", qualification: "Bachelor's in Computer Science" },
  { id: 4, name: "Michael Brown", department: "CSE", year: 2, feedback: "Excellent", experience: "7 years", qualification: "Ph.D. in Artificial Intelligence" },
  { id: 5, name: "Sarah Wilson", department: "CSE", year: 3, feedback: "Good", experience: "5 years", qualification: "Master's in Computer Science" },
  { id: 6, name: "David Garcia", department: "CSE", year: 4, feedback: "Average", experience: "6 years", qualification: "Bachelor's in Software Engineering" },
  // ECE Department
  { id: 7, name: "Emily Clark", department: "ECE", year: 1, feedback: "Excellent", experience: "5 years", qualification: "Ph.D. in Electrical Engineering" },
  { id: 8, name: "Daniel Lee", department: "ECE", year: 1, feedback: "Good", experience: "4 years", qualification: "Master's in Electronics" },
  { id: 9, name: "Sophia Martinez", department: "ECE", year: 2, feedback: "Average", experience: "3 years", qualification: "Bachelor's in Electrical Engineering" },
  { id: 10, name: "Emily Clark", department: "ECE", year: 3, feedback: "Excellent", experience: "5 years", qualification: "Ph.D. in Electrical Engineering" },
  { id:11, name: "Daniel Lee", department: "ECE", year: 4, feedback: "Good", experience: "4 years", qualification: "Master's in Electronics" },
  { id: 12, name: "David Garcia", department: "ECE", year: 4, feedback: "Average", experience: "3 years", qualification: "Bachelor's in Electrical Engineering" },
  // EEE Department
  { id: 13, name: "Olivia Brown", department: "EEE", year: 1, feedback: "Excellent", experience: "5 years", qualification: "Ph.D. in Electrical Engineering" },
  { id: 14, name: "Matthew Wilson", department: "EEE", year: 2, feedback: "Good", experience: "4 years", qualification: "Master's in Electronics" },
  { id: 15, name: "Emily Clark", department: "EEE", year: 3, feedback: "Excellent", experience: "5 years", qualification: "Ph.D. in Electrical Engineering" },
  { id: 16, name: "Sophia Martinez", department: "EEE", year: 4, feedback: "Good", experience: "4 years", qualification: "Master's in Electronics" },
  // AIDS Department
  { id: 17, name: "Emma Harris", department: "AIDS", year: 1, feedback: "Excellent", experience: "5 years", qualification: "Ph.D. in Medicine" },
  { id: 18, name: "Alice Johnson", department: "AIDS", year: 2, feedback: "Good", experience: "4 years", qualification: "Master's in Epidemiology" },
  { id: 19, name: "Noah Wilson", department: "AIDS", year: 3, feedback: "Excellent", experience: "5 years", qualification: "Ph.D. in Medicine" },
  { id: 20, name: "William Anderson", department: "AIDS", year: 4, feedback: "Good", experience: "4 years", qualification: "Master's in Epidemiology" },
  // CSIT Department
  { id: 21, name: "Liam Taylor", department: "CSIT", year: 1, feedback: "Excellent", experience: "5 years", qualification: "Ph.D. in Computer Science" },
  { id: 22, name: "Ella Martinez", department: "CSIT", year: 2, feedback: "Good", experience: "4 years", qualification: "Master's in Information Technology" },
  { id: 23, name: "Emma Harris", department: "CSIT", year: 3, feedback: "Excellent", experience: "5 years", qualification: "Ph.D. in Computer Science" },
  { id: 24, name: "Ella Martinez", department: "CSIT", year: 4, feedback: "Good", experience: "4 years", qualification: "Master's in Information Technology" },
  // BBA Department
  { id: 25, name: "Noah Wilson", department: "BBA", year: 1, feedback: "Excellent", experience: "5 years", qualification: "Ph.D. in Business Administration" },
  { id: 26, name: "Ella Martinez", department: "BBA", year: 2, feedback: "Good", experience: "4 years", qualification: "Master's in Finance" },
  { id: 27, name: "Noah Wilson", department: "BBA", year: 3, feedback: "Excellent", experience: "5 years", qualification: "Ph.D. in Business Administration" },
  { id: 28, name: "William Anderso", department: "BBA", year: 4, feedback: "Good", experience: "4 years", qualification: "Master's in Finance" }
    // Add more counsellors as needed
];

function CounselorForm() {
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedCounselor, setSelectedCounselor] = useState(null);

    const handleDepartmentChange = (e) => {
        setSelectedDepartment(e.target.value);
    };

    const handleYearChange = (e) => {
        setSelectedYear(parseInt(e.target.value));
    };

    const handleCounselorSelection = (counselor) => {
        setSelectedCounselor(counselor);
    };

    const filteredCounsellors = counsellors.filter(counsellor => counsellor.department === selectedDepartment && counsellor.year === selectedYear);

    function SelectedCounselorDetails({ counselor }) {
      return (
        <div>
          <h2>Selected Counsellor Details</h2>
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <tbody>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Name:</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{counselor.name}</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Feedback:</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{counselor.feedback}</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Experience:</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{counselor.experience}</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Qualification:</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{counselor.qualification}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
    
    

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '20px', backgroundColor: '#f0f0f0', padding: '20px', width: '300px' }}>
                <h2 style={{ textAlign: 'center' }}>Counselor Form</h2>
                {/* Department Select */}
                <div style={{ marginBottom: '10px' }}>
                    <label style={{ marginRight: '10px', textAlign: 'right' }}>Department:</label>
                    <select
                        value={selectedDepartment}
                        onChange={handleDepartmentChange}
                        style={{ fontSize: 'inherit', padding: '5px', borderRadius: '5px' }}
                    >
                        <option value="">Select Department</option>
                        <option value="CSE">CSE</option>
                        <option value="ECE">ECE</option>
                        <option value="EEE">EEE</option>
                        <option value="AIDS">AIDS</option>
                        <option value="CSIT">CSIT</option>
                        <option value="BBA">BBA</option>
                        {/* Add more departments as needed */}
                    </select>
                </div>
                {/* Year Select */}
                <div style={{ marginBottom: '10px' }}>
                    <label style={{ marginRight: '10px', textAlign: 'right' }}>Year:</label>
                    <select
                        value={selectedYear}
                        onChange={handleYearChange}
                        style={{ fontSize: 'inherit', padding: '5px', borderRadius: '5px' }}
                        disabled={!selectedDepartment} // Disable year select until department is selected
                    >
                        <option value="">Select Year</option>
                        {[1, 2, 3, 4].map(year => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                </div>
                {/* Display Counsellors */}
                {selectedDepartment && selectedYear && (
                    <div>
                        <h2>Counsellors for {selectedDepartment} - Year {selectedYear}</h2>
                        <ul>
                            {filteredCounsellors.map(counselor => (
                                <li key={counselor.id} onClick={() => handleCounselorSelection(counselor)} style={{ cursor: 'pointer' }}>
                                    {counselor.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {/* Display Selected Counsellor Details */}
                {selectedCounselor && (
  <div>
    <h2>Selected Counsellor Details</h2>
    <table>
      <tbody>
        <tr>
          <td>Name:</td>
          <td>{selectedCounselor.name}</td>
        </tr>
        <tr>
          <td>Feedback:</td>
          <td>{selectedCounselor.feedback}</td>
        </tr>
        <tr>
          <td>Experience:</td>
          <td>{selectedCounselor.experience}</td>
        </tr>
        <tr>
          <td>Qualification:</td>
          <td>{selectedCounselor.qualification}</td>
        </tr>
      </tbody>
    </table>
  </div>
)}


            </div>
        </div>
    );
}

export default CounselorForm;
