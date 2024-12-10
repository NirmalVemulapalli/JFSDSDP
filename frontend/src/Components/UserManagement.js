import React, { useState } from "react";

const UserManagement = () => {
  const [action, setAction] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [users, setUsers] = useState([
    { id: 1, name: "Nirmal", email: "nirmal@example.com", role: "Admin" },
    { id: 2, name: "Avinash", email: "avinash@example.com", role: "User" },
  ]);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleAddUser = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newUser = {
      id: users.length + 1,
      name: formData.get("name"),
      email: formData.get("email"),
      role: formData.get("role"),
    };
    setUsers([...users, newUser]);
    setSuccessMessage(`User "${newUser.name}" added successfully!`);
  };

  const handleUpdateUser = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedUser = {
      id: selectedUserId,
      name: users.find((user) => user.id === selectedUserId).name,
      email: formData.get("email"),
      role: formData.get("role"),
    };
    setUsers(
      users.map((user) => (user.id === selectedUserId ? updatedUser : user))
    );
    setSuccessMessage(`User "${updatedUser.name}" updated successfully!`);
  };

  const handleDeleteUser = (event) => {
    event.preventDefault();
    const userToDelete = users.find((user) => user.id === selectedUserId);
    setUsers(users.filter((user) => user.id !== selectedUserId));
    setSuccessMessage(`User "${userToDelete.name}" deleted successfully!`);
  };

  const renderActionContent = () => {
    switch (action) {
      case "add":
        return (
          <div>
            <h3>Add User</h3>
            <form style={{ marginTop: "20px" }} onSubmit={handleAddUser}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  style={{ marginLeft: "10px", marginBottom: "10px" }}
                  required
                />
              </label>
              <br />
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
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
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                </select>
              </label>
              <br />
              <button type="submit" style={{ marginTop: "10px" }}>
                Submit
              </button>
            </form>
          </div>
        );
      case "view":
        return (
          <div>
            <h3>View Users</h3>
            <ul>
              {users.map((user) => (
                <li key={user.id}>
                  {user.name} - {user.email} ({user.role})
                </li>
              ))}
            </ul>
          </div>
        );
      case "update":
        return (
          <div>
            <h3>Update User</h3>
            <form style={{ marginTop: "20px" }} onSubmit={handleUpdateUser}>
              <label>
                Select User:
                <select
                  onChange={(e) => setSelectedUserId(Number(e.target.value))}
                  style={{ marginLeft: "10px", marginBottom: "10px" }}
                  required
                >
                  <option value="">Select</option>
                  {users.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  ))}
                </select>
              </label>
              <br />
              <label>
                New Email:
                <input
                  type="email"
                  name="email"
                  placeholder="Enter new email"
                  style={{ marginLeft: "10px", marginBottom: "10px" }}
                  required
                />
              </label>
              <br />
              <label>
                New Role:
                <select
                  name="role"
                  style={{ marginLeft: "10px", marginBottom: "10px" }}
                  required
                >
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                </select>
              </label>
              <br />
              <button type="submit" style={{ marginTop: "10px" }}>
                Update
              </button>
            </form>
          </div>
        );
      case "delete":
        return (
          <div>
            <h3>Delete User</h3>
            <form style={{ marginTop: "20px" }} onSubmit={handleDeleteUser}>
              <label>
                Select User:
                <select
                  onChange={(e) => setSelectedUserId(Number(e.target.value))}
                  style={{ marginLeft: "10px", marginBottom: "10px" }}
                  required
                >
                  <option value="">Select</option>
                  {users.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  ))}
                </select>
              </label>
              <br />
              <button
                type="submit"
                style={{
                  marginTop: "10px",
                  color: "white",
                  backgroundColor: "red",
                }}
              >
                Delete
              </button>
            </form>
          </div>
        );
      default:
        return <p>Select an action to manage users.</p>;
    }
  };

  return (
    <div>
      <h2>User Management</h2>
      <div>
        <button style={{ margin: "10px" }} onClick={() => setAction("add")}>
          Add User
        </button>
        <button style={{ margin: "10px" }} onClick={() => setAction("view")}>
          View Users
        </button>
        <button style={{ margin: "10px" }} onClick={() => setAction("update")}>
          Update User
        </button>
        <button style={{ margin: "10px" }} onClick={() => setAction("delete")}>
          Delete User
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

export default UserManagement;