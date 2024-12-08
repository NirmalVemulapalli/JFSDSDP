import React, { useState } from "react";

const NotificationSystem = () => {
  const [action, setAction] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [notifications, setNotifications] = useState([
    { id: 1, title: "Welcome!", message: "Thank you for joining our platform." },
    { id: 2, title: "Reminder", message: "Don't forget to check out the latest updates." },
  ]);
  const [selectedNotificationId, setSelectedNotificationId] = useState(null);

  const handleSendNotification = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newNotification = {
      id: notifications.length + 1,
      title: formData.get("title"),
      message: formData.get("message"),
    };
    setNotifications([...notifications, newNotification]);
    setSuccessMessage(`Notification "${newNotification.title}" sent successfully!`);
  };

  const handleDeleteNotification = (event) => {
    event.preventDefault();
    const notificationToDelete = notifications.find(
      (notification) => notification.id === selectedNotificationId
    );
    setNotifications(
      notifications.filter((notification) => notification.id !== selectedNotificationId)
    );
    setSuccessMessage(`Notification "${notificationToDelete.title}" deleted successfully!`);
  };

  const renderActionContent = () => {
    switch (action) {
      case "send":
        return (
          <div>
            <h3>Send Notification</h3>
            <form style={{ marginTop: "20px" }} onSubmit={handleSendNotification}>
              <label>
                Title:
                <input
                  type="text"
                  name="title"
                  placeholder="Enter notification title"
                  style={{ marginLeft: "10px", marginBottom: "10px" }}
                  required
                />
              </label>
              <br />
              <label>
                Message:
                <textarea
                  name="message"
                  placeholder="Enter notification message"
                  style={{ marginLeft: "10px", marginBottom: "10px" }}
                  required
                ></textarea>
              </label>
              <br />
              <button type="submit" style={{ marginTop: "10px" }}>
                Send
              </button>
            </form>
          </div>
        );
      case "view":
        return (
          <div>
            <h3>View Notifications</h3>
            <ul>
              {notifications.map((notification) => (
                <li key={notification.id}>
                  <strong>{notification.title}</strong>: {notification.message}
                </li>
              ))}
            </ul>
          </div>
        );
      case "delete":
        return (
          <div>
            <h3>Delete Notification</h3>
            <form style={{ marginTop: "20px" }} onSubmit={handleDeleteNotification}>
              <label>
                Select Notification:
                <select
                  onChange={(e) => setSelectedNotificationId(Number(e.target.value))}
                  style={{ marginLeft: "10px", marginBottom: "10px" }}
                  required
                >
                  <option value="">Select</option>
                  {notifications.map((notification) => (
                    <option key={notification.id} value={notification.id}>
                      {notification.title}
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
        return <p>Select an action to manage notifications.</p>;
    }
  };

  return (
    <div>
      <h2>Notification System</h2>
      <div>
        <button style={{ margin: "10px" }} onClick={() => setAction("send")}>
          Send Notification
        </button>
        <button style={{ margin: "10px" }} onClick={() => setAction("view")}>
          View Notifications
        </button>
        <button style={{ margin: "10px" }} onClick={() => setAction("delete")}>
          Delete Notification
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

export default NotificationSystem;
