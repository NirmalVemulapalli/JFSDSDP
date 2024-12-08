import React, { useState } from 'react';
import ContentManagement from './ContentManagement';
import InteractiveSessionManager from './InteractiveSessionManager';
import ContentCreationTools from './ContentCreationTools';
import UserProgressTracking from './UserProgressTracking';
import QuizAssessmentCreation from './QuizAssessmentCreation';

const EducatorDashboard = () => {
  const [selectedModule, setSelectedModule] = useState("");
  const [action, setAction] = useState(""); // Track the action for the content module

  // List of submodules with their respective names
  const modules = [
    { name: "Content Management" },
    { name: "Interactive Session Manager" },
    { name: "Content Creation Tools" },
    { name: "User Progress Tracking" },
    { name: "Quiz & Assessment Creation" },
  ];

  const renderModule = (moduleName) => {
    switch (moduleName) {
      case "Content Management":
        return <ContentManagement />;
      case "Interactive Session Manager":
        return <InteractiveSessionManager />;
      case "Content Creation Tools":
        return (
          <ContentCreationTools
            action={action}  // Pass the action to ContentCreationTools
            setAction={setAction} // Pass the setAction to allow changing actions
          />
        );
      case "User Progress Tracking":
        return <UserProgressTracking />;
      case "Quiz & Assessment Creation":
        return <QuizAssessmentCreation />;
      default:
        return <h3>Select a submodule to manage</h3>;
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar for Submodules */}
      <div style={{ width: "20%", backgroundColor: "#f5f5f5", padding: "10px" }}>
        <h2 style={{ textAlign: "left" }}>Submodules</h2>
        <ul style={{ listStyle: "none", padding: "0" }}>
          {modules.map((module, index) => (
            <li
              key={index}
              style={{
                marginBottom: "10px",
                cursor: "pointer",
                padding: "10px",
                backgroundColor: selectedModule === module.name ? "#8b0000" : "#ddd",
                color: selectedModule === module.name ? "#fff" : "#000",
              }}
              onClick={() => setSelectedModule(module.name)}
            >
              {module.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Area for Selected Module */}
      <div style={{ flex: 1, padding: "20px", textAlign: "center" }}>
        <h1 style={{ marginBottom: "20px" }}>Educator Dashboard</h1>
        {renderModule(selectedModule)}
      </div>
    </div>
  );
};

export default EducatorDashboard;
