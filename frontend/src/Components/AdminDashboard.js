import React, { useState } from 'react';
import UserManagement from './UserManagement';
import ContentManagement from './ContentManagement';
import NotificationSystem from './NotificationSystem';
import UserRoleAssignment from './UserRoleAssignment';
import ContentReviewApproval from './ContentReviewApproval'; // Import ContentReviewApproval

const AdminDashboard = () => {
  const [selectedModule, setSelectedModule] = useState("");

  // List of submodules with their respective names
  const modules = [
    { name: "User Management" },
    { name: "Content Management" },
    { name: "Notification System" },
    { name: "User Role Assignment" },
    { name: "Content Review & Approval" }, // Include Content Review & Approval
  ];

  // Render a component dynamically based on the selected module
  const renderModule = (moduleName) => {
    switch (moduleName) {
      case "User Management":
        return <UserManagement />;
      case "Content Management":
        return <ContentManagement />;
      case "Notification System":
        return <NotificationSystem />;
      case "User Role Assignment":
        return <UserRoleAssignment />;
      case "Content Review & Approval":
        return <ContentReviewApproval />;
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
        <h1 style={{ marginBottom: "20px" }}>Admin Dashboard</h1>
        {renderModule(selectedModule)}
      </div>
    </div>
  );
};

export default AdminDashboard;
