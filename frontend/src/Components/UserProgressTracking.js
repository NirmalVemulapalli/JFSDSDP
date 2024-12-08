import React, { useState } from "react";

const UserProgressTracking = () => {
  const [action, setAction] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [users, setUsers] = useState([
    { id: 1, name: "Nirmal", email: "nirmal@example.com", role: "Student" },
    { id: 2, name: "Avinash", email: "avinash@example.com", role: "Student" },
  ]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [userProgress, setUserProgress] = useState({
    1: { assignments: 5, completed: 3 },
    2: { assignments: 4, completed: 2 },
  });

  const handleViewProgress = () => {
    if (selectedUserId !== null) {
      const progress = userProgress[selectedUserId];
      setSuccessMessage(
        `User "${users.find((user) => user.id === selectedUserId).name}" has completed ${progress.completed} out of ${progress.assignments} assignments.`
      );
    } else {
      setSuccessMessage("Please select a user to view progress.");
    }
  };

  const handleUpdateProgress = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedProgress = {
      assignments: formData.get("assignments"),
      completed: formData.get("completed"),
    };
    setUserProgress((prevState) => ({
      ...prevState,
      [selectedUserId]: updatedProgress,
    }));
    setSuccessMessage(
      `Progress for "${users.find((user) => user.id === selectedUserId).name}" updated successfully!`
    );
  };

  const renderActionContent = () => {
    switch (action) {
      case "view":
        return (
          <div>
            <h3>View User Progress</h3>
            <form style={{ marginTop: "20px" }} onSubmit={handleViewProgress}>
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
              <button type="submit" style={{ marginTop: "10px" }}>
                View Progress
              </button>
            </form>
          </div>
        );
      case "update":
        return (
          <div>
            <h3>Update User Progress</h3>
            <form style={{ marginTop: "20px" }} onSubmit={handleUpdateProgress}>
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
                Total Assignments:
                <input
                  type="number"
                  name="assignments"
                  placeholder="Enter total assignments"
                  style={{ marginLeft: "10px", marginBottom: "10px" }}
                  required
                />
              </label>
              <br />
              <label>
                Completed Assignments:
                <input
                  type="number"
                  name="completed"
                  placeholder="Enter completed assignments"
                  style={{ marginLeft: "10px", marginBottom: "10px" }}
                  required
                />
              </label>
              <br />
              <button type="submit" style={{ marginTop: "10px" }}>
                Update Progress
              </button>
            </form>
          </div>
        );
      default:
        return <p>Select an action to manage progress.</p>;
    }
  };

  return (
    <div>
      <h2>User Progress Tracking</h2>
      <div>
        <button style={{ margin: "10px" }} onClick={() => setAction("view")}>
          View Progress
        </button>
        <button style={{ margin: "10px" }} onClick={() => setAction("update")}>
          Update Progress
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

export default UserProgressTracking;
