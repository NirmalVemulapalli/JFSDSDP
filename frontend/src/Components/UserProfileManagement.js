import React, { useState } from "react";

const CitizenDashboard = () => {
  const [user, setUser] = useState({
    name: "Nana Saheb",
    email: "nanasaheb@example.com",
    password: "password123",
    profilePicture: null,
  });

  const [editMode, setEditMode] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [newName, setNewName] = useState(user.name);
  const [newEmail, setNewEmail] = useState(user.email);

  const handleChangePassword = (e) => {
    e.preventDefault();
    setUser((prevUser) => ({
      ...prevUser,
      password: newPassword,
    }));
    alert("Password updated successfully!");
  };

  const handleEditProfile = () => {
    setUser({
      ...user,
      name: newName,
      email: newEmail,
    });
    setEditMode(false);
    alert("Profile updated successfully!");
  };

  const handleUploadProfilePicture = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser((prevUser) => ({
          ...prevUser,
          profilePicture: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h2>Citizen Dashboard</h2>
      <div>
        <h3>User Profile</h3>
        <div>
          {user.profilePicture ? (
            <img
              src={user.profilePicture}
              alt="Profile"
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            />
          ) : (
            <div
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                backgroundColor: "lightgray",
              }}
            ></div>
          )}
          <br />
          <button onClick={() => document.getElementById("profilePictureInput").click()}>
            Upload Profile Picture
          </button>
          <input
            type="file"
            id="profilePictureInput"
            style={{ display: "none" }}
            onChange={handleUploadProfilePicture}
          />
        </div>

        <div>
          {editMode ? (
            <form onSubmit={handleEditProfile}>
              <div>
                <label>
                  Name:
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div>
                <label>
                  Email:
                  <input
                    type="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    required
                  />
                </label>
              </div>
              <button type="submit">Save Profile</button>
              <button type="button" onClick={() => setEditMode(false)}>
                Cancel
              </button>
            </form>
          ) : (
            <div>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <button onClick={() => setEditMode(true)}>Edit Profile</button>
            </div>
          )}
        </div>

        <div>
          <h3>Change Password</h3>
          <form onSubmit={handleChangePassword}>
            <div>
              <label>
                New Password:
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </label>
            </div>
            <button type="submit">Change Password</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CitizenDashboard;
