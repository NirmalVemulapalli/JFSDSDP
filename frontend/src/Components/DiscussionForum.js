import React, { useState } from "react";

const DiscussionForum = () => {
  const [action, setAction] = useState("");
  const [discussions, setDiscussions] = useState([
    { id: 1, title: "What is the importance of the Indian Constitution?", replies: [] },
    { id: 2, title: "How does the Indian judicial system work?", replies: [] },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newDiscussionTitle, setNewDiscussionTitle] = useState("");
  const [replyContent, setReplyContent] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleStartNewDiscussion = (event) => {
    event.preventDefault();
    const newDiscussion = {
      id: discussions.length + 1,
      title: newDiscussionTitle,
      replies: [],
    };
    setDiscussions([...discussions, newDiscussion]);
    setNewDiscussionTitle("");
    setSuccessMessage(`Discussion titled "${newDiscussionTitle}" started successfully!`);
  };

  const handleReplyToDiscussion = (discussionId) => {
    const updatedDiscussions = discussions.map((discussion) =>
      discussion.id === discussionId
        ? { ...discussion, replies: [...discussion.replies, replyContent] }
        : discussion
    );
    setDiscussions(updatedDiscussions);
    setReplyContent("");
    setSuccessMessage(`Reply added to discussion "${discussions.find(d => d.id === discussionId).title}"`);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDiscussions = discussions.filter((discussion) =>
    discussion.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderActionContent = () => {
    switch (action) {
      case "startDiscussion":
        return (
          <div>
            <h3>Start New Discussion</h3>
            <form onSubmit={handleStartNewDiscussion}>
              <label>
                Title:
                <input
                  type="text"
                  value={newDiscussionTitle}
                  onChange={(e) => setNewDiscussionTitle(e.target.value)}
                  placeholder="Enter discussion title"
                  required
                />
              </label>
              <br />
              <button type="submit">Start Discussion</button>
            </form>
          </div>
        );
      case "viewDiscussions":
        return (
          <div>
            <h3>Discussions</h3>
            <input
              type="text"
              placeholder="Search topics..."
              value={searchTerm}
              onChange={handleSearch}
              style={{ marginBottom: "10px", padding: "5px" }}
            />
            <ul>
              {filteredDiscussions.map((discussion) => (
                <li key={discussion.id}>
                  <h4>{discussion.title}</h4>
                  <button onClick={() => setAction("reply")}>Reply</button>
                  <ul>
                    {discussion.replies.map((reply, index) => (
                      <li key={index}>{reply}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        );
      case "reply":
        return (
          <div>
            <h3>Reply to Discussion</h3>
            <label>
              Reply:
              <textarea
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                placeholder="Enter your reply"
                required
              />
            </label>
            <br />
            <button
              onClick={() => {
                const discussionId = discussions[discussions.length - 1].id;
                handleReplyToDiscussion(discussionId);
              }}
            >
              Submit Reply
            </button>
          </div>
        );
      default:
        return <p>Select an action to view or start a discussion.</p>;
    }
  };

  return (
    <div>
      <h2>Discussion Forum</h2>
      <div>
        <button onClick={() => setAction("startDiscussion")}>Start New Discussion</button>
        <button onClick={() => setAction("viewDiscussions")}>View Discussions</button>
      </div>
      <div>{renderActionContent()}</div>
      {successMessage && (
        <div style={{ marginTop: "20px", color: "green" }}>
          <h3>{successMessage}</h3>
        </div>
      )}
    </div>
  );
};

export default DiscussionForum;
