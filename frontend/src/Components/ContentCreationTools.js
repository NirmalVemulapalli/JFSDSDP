import React, { useState } from "react";

const ContentCreationTools = ({ action, setAction }) => {
  const [successMessage, setSuccessMessage] = useState("");
  const [contents, setContents] = useState([
    { id: 1, title: "Preamble of the Constitution", status: "Created" },
    { id: 2, title: "Fundamental Rights", status: "Created" },
  ]);
  const [selectedContentId, setSelectedContentId] = useState(null);

  const handleCreateContent = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newContent = {
      id: contents.length + 1,
      title: formData.get("title"),
      status: "Created",
    };
    setContents([...contents, newContent]);
    setSuccessMessage(`Content "${newContent.title}" created successfully!`);
  };

  const renderActionContent = () => {
    switch (action) {
      case "create":
        return (
          <div>
            <h3>Create Content</h3>
            <form onSubmit={handleCreateContent}>
              <label>
                Title:
                <input
                  type="text"
                  name="title"
                  placeholder="Enter title"
                  required
                />
              </label>
              <br />
              <button type="submit">Create</button>
            </form>
          </div>
        );
      case "view":
        return (
          <div>
            <h3>View Content</h3>
            <ul>
              {contents.map((content) => (
                <li key={content.id}>
                  {content.title} - {content.status}
                </li>
              ))}
            </ul>
          </div>
        );
      case "update":
        return (
          <div>
            <h3>Update Content</h3>
            {/* Add form for update */}
          </div>
        );
      default:
        return <p>Select an action to manage content.</p>;
    }
  };

  return (
    <div>
      <h2>Content Creation Tools</h2>
      <div>
        <button onClick={() => setAction("create")}>Create Content</button>
        <button onClick={() => setAction("view")}>View Content</button>
        <button onClick={() => setAction("update")}>Update Content</button>
      </div>
      <div>{renderActionContent()}</div>
      {successMessage && <div>{successMessage}</div>}
    </div>
  );
};

export default ContentCreationTools;
