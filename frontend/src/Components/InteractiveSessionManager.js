import React, { useState } from "react";

const InteractiveSessionManager = () => {
  const [action, setAction] = useState("");
  const [sessions, setSessions] = useState([
    { id: 1, title: "Session 1", status: "Active" },
    { id: 2, title: "Session 2", status: "Ended" },
  ]);
  const [sessionTitle, setSessionTitle] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleStartSession = (event) => {
    event.preventDefault();
    const newSession = {
      id: sessions.length + 1,
      title: sessionTitle,
      status: "Active",
    };
    setSessions([...sessions, newSession]);
    setSuccessMessage(`Session "${newSession.title}" started successfully!`);
    setSessionTitle(""); // Clear title field after starting a session
  };

  const handleEndSession = (sessionId) => {
    setSessions(
      sessions.map((session) =>
        session.id === sessionId
          ? { ...session, status: "Ended" }
          : session
      )
    );
    setSuccessMessage(`Session ended successfully!`);
  };

  const renderActionContent = () => {
    switch (action) {
      case "start":
        return (
          <div>
            <h3>Start New Session</h3>
            <form style={{ marginTop: "20px" }} onSubmit={handleStartSession}>
              <label>
                Session Title:
                <input
                  type="text"
                  value={sessionTitle}
                  onChange={(e) => setSessionTitle(e.target.value)}
                  placeholder="Enter session title"
                  style={{ marginLeft: "10px", marginBottom: "10px" }}
                  required
                />
              </label>
              <br />
              <button type="submit" style={{ marginTop: "10px" }}>
                Start Session
              </button>
            </form>
          </div>
        );
      case "view":
        return (
          <div>
            <h3>View Sessions</h3>
            <ul>
              {sessions.map((session) => (
                <li key={session.id}>
                  {session.title} - {session.status}{" "}
                  {session.status === "Active" && (
                    <button
                      style={{ marginLeft: "10px", backgroundColor: "red" }}
                      onClick={() => handleEndSession(session.id)}
                    >
                      End Session
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        );
      case "end":
        return (
          <div>
            <h3>End Session</h3>
            <form style={{ marginTop: "20px" }}>
              <label>
                Select Session to End:
                <select
                  onChange={(e) => handleEndSession(Number(e.target.value))}
                  style={{ marginLeft: "10px", marginBottom: "10px" }}
                  required
                >
                  <option value="">Select</option>
                  {sessions
                    .filter((session) => session.status === "Active")
                    .map((session) => (
                      <option key={session.id} value={session.id}>
                        {session.title}
                      </option>
                    ))}
                </select>
              </label>
              <br />
              <button
                type="button" // Use type="button" instead of submit
                style={{
                  marginTop: "10px",
                  color: "white",
                  backgroundColor: "red",
                }}
                disabled={sessions.every((session) => session.status === "Ended")}
              >
                End Session
              </button>
            </form>
          </div>
        );
      default:
        return <p>Select an action to manage sessions.</p>;
    }
  };

  return (
    <div>
      <h2>Interactive Session Manager</h2>
      <div>
        <button
          style={{ margin: "10px" }}
          onClick={() => {
            console.log("Start button clicked");
            setAction("start");
          }}
        >
          Start New Session
        </button>
        <button
          style={{ margin: "10px" }}
          onClick={() => {
            console.log("View button clicked");
            setAction("view");
          }}
        >
          View Sessions
        </button>
        <button
          style={{ margin: "10px" }}
          onClick={() => {
            console.log("End button clicked");
            setAction("end");
          }}
        >
          End Session
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

export default InteractiveSessionManager;
