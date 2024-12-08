import React, { useState } from "react";

const ContentReviewApproval = () => {
  const [action, setAction] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [contents, setContents] = useState([
    { id: 1, title: "Preamble of the Constitution", status: "Pending Review" },
    { id: 2, title: "Fundamental Rights", status: "Pending Review" },
  ]);
  const [selectedContentId, setSelectedContentId] = useState(null);

  const handleApproveContent = () => {
    setContents(
      contents.map((content) =>
        content.id === selectedContentId
          ? { ...content, status: "Approved" }
          : content
      )
    );
    const approvedContent = contents.find((content) => content.id === selectedContentId);
    setSuccessMessage(`Content "${approvedContent.title}" has been approved!`);
  };

  const handleRejectContent = () => {
    setContents(
      contents.map((content) =>
        content.id === selectedContentId
          ? { ...content, status: "Rejected" }
          : content
      )
    );
    const rejectedContent = contents.find((content) => content.id === selectedContentId);
    setSuccessMessage(`Content "${rejectedContent.title}" has been rejected!`);
  };

  const renderActionContent = () => {
    switch (action) {
      case "review":
        return (
          <div>
            <h3>Review Content</h3>
            <ul>
              {contents.map((content) => (
                <li key={content.id}>
                  <strong>{content.title}</strong> - Status: {content.status}
                </li>
              ))}
            </ul>
          </div>
        );
      case "approve":
        return (
          <div>
            <h3>Approve Content</h3>
            <form
              style={{ marginTop: "20px" }}
              onSubmit={(e) => {
                e.preventDefault();
                handleApproveContent();
              }}
            >
              <label>
                Select Content:
                <select
                  onChange={(e) => setSelectedContentId(Number(e.target.value))}
                  style={{ marginLeft: "10px", marginBottom: "10px" }}
                  required
                >
                  <option value="">Select</option>
                  {contents
                    .filter((content) => content.status === "Pending Review")
                    .map((content) => (
                      <option key={content.id} value={content.id}>
                        {content.title}
                      </option>
                    ))}
                </select>
              </label>
              <br />
              <button type="submit" style={{ marginTop: "10px" }}>
                Approve
              </button>
            </form>
          </div>
        );
      case "reject":
        return (
          <div>
            <h3>Reject Content</h3>
            <form
              style={{ marginTop: "20px" }}
              onSubmit={(e) => {
                e.preventDefault();
                handleRejectContent();
              }}
            >
              <label>
                Select Content:
                <select
                  onChange={(e) => setSelectedContentId(Number(e.target.value))}
                  style={{ marginLeft: "10px", marginBottom: "10px" }}
                  required
                >
                  <option value="">Select</option>
                  {contents
                    .filter((content) => content.status === "Pending Review")
                    .map((content) => (
                      <option key={content.id} value={content.id}>
                        {content.title}
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
                Reject
              </button>
            </form>
          </div>
        );
      default:
        return <p>Select an action to review and manage content approvals.</p>;
    }
  };

  return (
    <div>
      <h2>Content Review & Approval</h2>
      <div>
        <button style={{ margin: "10px" }} onClick={() => setAction("review")}>
          Review Content
        </button>
        <button style={{ margin: "10px" }} onClick={() => setAction("approve")}>
          Approve Content
        </button>
        <button style={{ margin: "10px" }} onClick={() => setAction("reject")}>
          Reject Content
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

export default ContentReviewApproval;
