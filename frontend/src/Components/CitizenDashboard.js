import React, { useState } from 'react';
import DiscussionForum from './DiscussionForum';
import RatingSystem from './RatingSystem';
import UserProfileManagement from './UserProfileManagement';
import LearningDashboard from './LearningDashboard';
import FeedbackSuggestions from './FeedbackSuggestions';

const CitizenDashboard = () => {
  const [selectedModule, setSelectedModule] = useState("");

  const modules = [
    { name: "Discussion Forum" },
    { name: "Rating System" },
    { name: "User Profile Management" },
    { name: "Learning Dashboard" },
    { name: "Feedback & Suggestions" },
  ];

  const renderModule = (moduleName) => {
    switch (moduleName) {
      case "Discussion Forum":
        return <DiscussionForum />;
      case "Rating System":
        return <RatingSystem />;
      case "User Profile Management":
        return <UserProfileManagement />;
      case "Learning Dashboard":
        return <LearningDashboard />;
      case "Feedback & Suggestions":
        return <FeedbackSuggestions />;
      default:
        return <h3>Select a submodule to explore</h3>;
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ width: "20%", backgroundColor: "#f5f5f5", padding: "10px" }}>
        <h2>Submodules</h2>
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
      <div style={{ flex: 1, padding: "20px", textAlign: "center" }}>
        <h1>Citizen Dashboard</h1>
        {renderModule(selectedModule)}
      </div>
    </div>
  );
};

export default CitizenDashboard;
