import React, { useState } from "react";

const CitizenDashboard = () => {
  const [action, setAction] = useState("");
  const [feedback, setFeedback] = useState("");
  const [suggestions, setSuggestions] = useState([
    { id: 1, suggestion: "Increase awareness about fundamental rights", status: "Under Review" },
    { id: 2, suggestion: "Include more interactive sessions on the Constitution", status: "Implemented" },
  ]);
  const [submittedFeedback, setSubmittedFeedback] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmitFeedback = () => {
    setSubmittedFeedback([...submittedFeedback, { id: Date.now(), feedback }]);
    setFeedback("");
    setSuccessMessage("Feedback submitted successfully!");
  };

  const handleProvideSuggestion = (suggestionText) => {
    const newSuggestion = {
      id: Date.now(),
      suggestion: suggestionText,
      status: "Under Review",
    };
    setSuggestions([...suggestions, newSuggestion]);
    setSuccessMessage("Suggestion provided successfully!");
  };

  const handleFollowUp = (id) => {
    const updatedSuggestions = suggestions.map(suggestion =>
      suggestion.id === id
        ? { ...suggestion, status: "Followed Up" }
        : suggestion
    );
    setSuggestions(updatedSuggestions);
    setSuccessMessage("Followed up on suggestion successfully!");
  };

  const renderActionContent = () => {
    switch (action) {
      case "feedback":
        return (
          <div>
            <h3>Submit Feedback</h3>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Provide your feedback here"
              rows="4"
              cols="50"
            />
            <button onClick={handleSubmitFeedback} style={{ marginTop: "10px" }}>
              Submit Feedback
            </button>
          </div>
        );
      case "suggestions":
        return (
          <div>
            <h3>View Suggestions</h3>
            <ul>
              {suggestions.map((suggestion) => (
                <li key={suggestion.id}>
                  {suggestion.suggestion} - Status: {suggestion.status}{" "}
                  {suggestion.status === "Under Review" && (
                    <button onClick={() => handleFollowUp(suggestion.id)}>
                      Follow Up
                    </button>
                  )}
                </li>
              ))}
            </ul>
            <div>
              <h4>Provide New Suggestion</h4>
              <textarea
                placeholder="Write your suggestion here"
                onBlur={(e) => handleProvideSuggestion(e.target.value)}
                rows="4"
                cols="50"
              />
            </div>
          </div>
        );
      default:
        return <p>Select an action to manage feedback and suggestions.</p>;
    }
  };

  return (
    <div>
      <h2>Citizen Dashboard: Feedback & Suggestions</h2>
      <div>
        <button style={{ margin: "10px" }} onClick={() => setAction("feedback")}>
          Submit Feedback
        </button>
        <button style={{ margin: "10px" }} onClick={() => setAction("suggestions")}>
          View Suggestions
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
