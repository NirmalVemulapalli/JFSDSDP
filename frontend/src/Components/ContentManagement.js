import React, { useState } from "react";

const ContentManagement = () => {
  const [action, setAction] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [contents, setContents] = useState([
    { id: 1, title: "Preamble of the Constitution", description: "Understanding the preamble and its significance." },
    { id: 2, title: "Fundamental Rights", description: "Exploring the fundamental rights guaranteed to citizens." },
  ]);
  const [selectedContentId, setSelectedContentId] = useState(null);

  const handleAddContent = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newContent = {
      id: contents.length + 1,
      title: formData.get("title"),
      description: formData.get("description"),
    };
    setContents([...contents, newContent]);
    setSuccessMessage(`Content "${newContent.title}" added successfully!`);
  };

  const handleEditContent = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedContent = {
      id: selectedContentId,
      title: formData.get("title"),
      description: formData.get("description"),
    };
    setContents(
      contents.map((content) =>
        content.id === selectedContentId ? updatedContent : content
      )
    );
    setSuccessMessage(`Content "${updatedContent.title}" updated successfully!`);
  };

  const handleDeleteContent = (event) => {
    event.preventDefault();
    const contentToDelete = contents.find((content) => content.id === selectedContentId);
    setContents(contents.filter((content) => content.id !== selectedContentId));
    setSuccessMessage(`Content "${contentToDelete.title}" deleted successfully!`);
  };

  const renderActionContent = () => {
    switch (action) {
      case "add":
        return (
          <div>
            <h3>Add New Content</h3>
            <form style={{ marginTop: "20px" }} onSubmit={handleAddContent}>
              <label>
                Title:
                <input
                  type="text"
                  name="title"
                  placeholder="Enter title (e.g., Fundamental Duties)"
                  style={{ marginLeft: "10px", marginBottom: "10px" }}
                  required
                />
              </label>
              <br />
              <label>
                Description:
                <textarea
                  name="description"
                  placeholder="Enter description (e.g., Responsibilities of citizens)"
                  style={{ marginLeft: "10px", marginBottom: "10px" }}
                  required
                ></textarea>
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
            <h3>View Educational Content</h3>
            <ul>
              {contents.map((content) => (
                <li key={content.id}>
                  <strong>{content.title}</strong>: {content.description}
                </li>
              ))}
            </ul>
          </div>
        );
      case "edit":
        return (
          <div>
            <h3>Edit Content</h3>
            <form style={{ marginTop: "20px" }} onSubmit={handleEditContent}>
              <label>
                Select Content:
                <select
                  onChange={(e) => setSelectedContentId(Number(e.target.value))}
                  style={{ marginLeft: "10px", marginBottom: "10px" }}
                  required
                >
                  <option value="">Select</option>
                  {contents.map((content) => (
                    <option key={content.id} value={content.id}>
                      {content.title}
                    </option>
                  ))}
                </select>
              </label>
              <br />
              <label>
                New Title:
                <input
                  type="text"
                  name="title"
                  placeholder="Enter new title"
                  style={{ marginLeft: "10px", marginBottom: "10px" }}
                  required
                />
              </label>
              <br />
              <label>
                New Description:
                <textarea
                  name="description"
                  placeholder="Enter new description"
                  style={{ marginLeft: "10px", marginBottom: "10px" }}
                  required
                ></textarea>
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
            <h3>Delete Content</h3>
            <form style={{ marginTop: "20px" }} onSubmit={handleDeleteContent}>
              <label>
                Select Content:
                <select
                  onChange={(e) => setSelectedContentId(Number(e.target.value))}
                  style={{ marginLeft: "10px", marginBottom: "10px" }}
                  required
                >
                  <option value="">Select</option>
                  {contents.map((content) => (
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
                Delete
              </button>
            </form>
          </div>
        );
      default:
        return <p>Select an action to manage educational content.</p>;
    }
  };

  return (
    <div>
      <h2>Indian Constitution Content Management</h2>
      <div>
        <button style={{ margin: "10px" }} onClick={() => setAction("add")}>
          Add Content
        </button>
        <button style={{ margin: "10px" }} onClick={() => setAction("view")}>
          View Content
        </button>
        <button style={{ margin: "10px" }} onClick={() => setAction("edit")}>
          Edit Content
        </button>
        <button style={{ margin: "10px" }} onClick={() => setAction("delete")}>
          Delete Content
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

export default ContentManagement;
