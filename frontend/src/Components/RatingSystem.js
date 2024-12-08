import React, { useState } from "react";

const CitizenDashboard = () => {
  const [action, setAction] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [content, setContent] = useState([
    { id: 1, title: "The Importance of the Indian Constitution", ratings: [], feedback: "" },
    { id: 2, title: "Understanding the Indian Judiciary System", ratings: [], feedback: "" },
  ]);
  const [selectedContentId, setSelectedContentId] = useState(null);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleRateContent = (event) => {
    event.preventDefault();
    const updatedContent = content.map((item) =>
      item.id === selectedContentId
        ? { ...item, ratings: [...item.ratings, rating], feedback }
        : item
    );
    setContent(updatedContent);
    setSuccessMessage(`Rating submitted for "${content.find((item) => item.id === selectedContentId).title}"`);
    setRating(0);
    setFeedback("");
  };

  const handleReviewRatings = () => {
    const selectedContent = content.find((item) => item.id === selectedContentId);
    if (selectedContent) {
      return (
        <div>
          <h3>Ratings for "{selectedContent.title}"</h3>
          <p>Average Rating: {selectedContent.ratings.length > 0 ? (selectedContent.ratings.reduce((sum, rating) => sum + rating, 0) / selectedContent.ratings.length).toFixed(2) : "No ratings yet"}</p>
          <h4>Your Feedback: {selectedContent.feedback || "No feedback yet"}</h4>
        </div>
      );
    }
  };

  const renderActionContent = () => {
    switch (action) {
      case "rate":
        return (
          <div>
            <h3>Rate Content</h3>
            <form onSubmit={handleRateContent}>
              <label>
                Select Content:
                <select
                  onChange={(e) => setSelectedContentId(Number(e.target.value))}
                  style={{ marginLeft: "10px", marginBottom: "10px" }}
                  required
                >
                  <option value="">Select</option>
                  {content.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </label>
              <br />
              <label>
                Rating (1 to 5):
                <input
                  type="number"
                  value={rating}
                  onChange={(e) => setRating(Number(e.target.value))}
                  min="1"
                  max="5"
                  style={{ marginLeft: "10px", marginBottom: "10px" }}
                  required
                />
              </label>
              <br />
              <label>
                Feedback:
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Write your feedback"
                  style={{ marginLeft: "10px", marginBottom: "10px" }}
                  required
                />
              </label>
              <br />
              <button type="submit" style={{ marginTop: "10px" }}>
                Submit Rating
              </button>
            </form>
          </div>
        );
      case "view":
        return (
          <div>
            <h3>View Ratings</h3>
            <ul>
              {content.map((item) => (
                <li key={item.id}>
                  <h4>{item.title}</h4>
                  <p>
                    Average Rating: {item.ratings.length > 0 ? (item.ratings.reduce((sum, rating) => sum + rating, 0) / item.ratings.length).toFixed(2) : "No ratings yet"}
                  </p>
                  <p>Feedback: {item.feedback || "No feedback yet"}</p>
                </li>
              ))}
            </ul>
          </div>
        );
      case "review":
        return <div>{handleReviewRatings()}</div>;
      default:
        return <p>Select an action to rate or review content.</p>;
    }
  };

  return (
    <div>
      <h2>Citizen Dashboard</h2>
      <div>
        <button style={{ margin: "10px" }} onClick={() => setAction("rate")}>
          Rate Content
        </button>
        <button style={{ margin: "10px" }} onClick={() => setAction("view")}>
          View Ratings
        </button>
        <button style={{ margin: "10px" }} onClick={() => setAction("review")}>
          Review Your Ratings
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

export default CitizenDashboard;
