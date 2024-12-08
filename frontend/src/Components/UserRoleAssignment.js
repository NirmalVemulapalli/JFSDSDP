import React, { useState } from "react";

const UserRoleAssignment = () => {
  const [action, setAction] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [userRoles, setUserRoles] = useState([
    { id: 1, name: "Nirmal", role: "Admin" },
    { id: 2, name: "Avinash", role: "Educator" },
  ]);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleAssignRole = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userName = formData.get("name");
    const userRole = formData.get("role");

    const existingUser = userRoles.find((user) => user.name === userName);
    if (existingUser) {
      setUserRoles(
        userRoles.map((user) =>
          user.name === userName ? { ...user, role: userRole } : user
        )
      );
      setSuccessMessage(`Role "${userRole}" updated for "${userName}" successfully!`);
    } else {
      const newUser = {
        id: userRoles.length + 1,
        name: userName,
        role: userRole,
      };
      setUserRoles([...userRoles, newUser]);
      setSuccessMessage(`Role "${userRole}" assigned to "${userName}" successfully!`);
    }
  };

  const renderActionContent = () => {
    switch (action) {
      case "assign":
        return (
          <div>
            <h3>Assign Role to User</h3>
            <form style={{ marginTop: "20px" }} onSubmit={handleAssignRole}>
              <label>
                User Name:
                <input
                  type="text"
                  name="name"
                  placeholder="Enter user name"
                  style={{ marginLeft: "10px", marginBottom: "10px" }}
                  required
                />
              </label>
              <br />
              <label>
                Role:
                <select
                  name="role"
                  style={{ marginLeft: "10px", marginBottom: "10px" }}
                  required
                >
                  <option value="">Select Role</option>
                  <option value="Admin">Admin</option>
                  <option value="Educator">Educator</option>
                  <option value="Citizen">Citizen</option>
                </select>
              </label>
              <br />
              <button type="submit" style={{ marginTop: "10px" }}>
                Assign Role
              </button>
            </form>
          </div>
        );
      case "view":
        return (
          <div>
            <h3>View User Roles</h3>
            <ul>
              {userRoles.map((user) => (
                <li key={user.id}>
                  <strong>{user.name}</strong>: {user.role}
                </li>
              ))}
            </ul>
          </div>
        );
      default:
        return <p>Select an action to manage user roles.</p>;
    }
  };

  return (
    <div>
      <h2>User Role Assignment</h2>
      <div>
        <button style={{ margin: "10px" }} onClick={() => setAction("assign")}>
          Assign Role to User
        </button>
        <button style={{ margin: "10px" }} onClick={() => setAction("view")}>
          View User Roles
        </button>
      </div>
      <div style={{ marginTop: "20px" }}>{renderActionContent()}</div>
      {successMessage && (
        <div style={{ marginTop: "20px", color: "green" }}>
          <h3>{successMessage}</h3>
        </div>
      )}
    </div>
  );
};

export default UserRoleAssignment;
