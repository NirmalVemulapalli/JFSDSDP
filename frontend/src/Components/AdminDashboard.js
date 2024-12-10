import React, { useState } from 'react';
import UserManagement from './UserManagement';
import ContentManagement from './ContentManagement';
import NotificationSystem from './NotificationSystem';
import UserRoleAssignment from './UserRoleAssignment';
import ContentReviewApproval from './ContentReviewApproval';

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedModule, setSelectedModule] = useState("");

  const modules = [
    { name: "User Management" },
    { name: "Content Management" },
    { name: "Notification System" },
    { name: "User Role Assignment" },
    { name: "Content Review & Approval" },
  ];

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
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* Sidebar */}
      <div
        style={{
          width: isSidebarOpen ? "250px" : "50px",
          transition: "width 0.3s",
          backgroundColor: "#f8f9fa",
          boxShadow: "2px 0 5px rgba(0, 0, 0, 0.2)",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: "#8b0000",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            right: "-15px",
            borderRadius: "50%",
            cursor: "pointer",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? "←" : "→"}
        </div>
        <h2
          style={{
            textAlign: "left",
            padding: "10px",
            fontSize: "1.2rem",
            display: isSidebarOpen ? "block" : "none",
          }}
        >
          Submodules
        </h2>
        <ul
          style={{
            listStyle: "none",
            padding: "0",
            margin: "0",
          }}
        >
          {modules.map((module, index) => (
            <li
              key={index}
              style={{
                marginBottom: "10px",
                cursor: "pointer",
                padding: isSidebarOpen ? "15px" : "10px 5px",
                textAlign: isSidebarOpen ? "left" : "center",
                backgroundColor:
                  selectedModule === module.name ? "#8b0000" : "#f1f1f1",
                color: selectedModule === module.name ? "#fff" : "#000",
                transition: "all 0.3s",
                borderRadius: isSidebarOpen ? "10px" : "50%",
                overflow: "hidden",
                whiteSpace: "nowrap",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", // Shadow added
              }}
              onClick={() => setSelectedModule(module.name)}
            >
              {isSidebarOpen ? module.name : module.name[0]}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content Area */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          textAlign: "center",
          backgroundColor: "#ffffff",
          overflowY: "auto",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>Admin Dashboard</h1>
        {renderModule(selectedModule)}
      </div>
    </div>
  );
};

export default AdminDashboard;
