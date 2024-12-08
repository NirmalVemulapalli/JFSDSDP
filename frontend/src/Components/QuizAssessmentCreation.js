import React, { useState } from "react";

const EducatorDashboard = () => {
  const [action, setAction] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [quizzes, setQuizzes] = useState([]);
  const [assessments, setAssessments] = useState([]);

  const handleCreateQuiz = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newQuiz = {
      id: quizzes.length + 1,
      title: formData.get("title"),
      questions: formData.get("questions"),
    };
    setQuizzes([...quizzes, newQuiz]);
    setSuccessMessage(`Quiz "${newQuiz.title}" created successfully!`);
  };

  const handleCreateAssessment = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newAssessment = {
      id: assessments.length + 1,
      title: formData.get("title"),
      totalMarks: formData.get("totalMarks"),
    };
    setAssessments([...assessments, newAssessment]);
    setSuccessMessage(`Assessment "${newAssessment.title}" created successfully!`);
  };

  const renderActionContent = () => {
    switch (action) {
      case "createQuiz":
        return (
          <div>
            <h3>Create Quiz</h3>
            <form onSubmit={handleCreateQuiz}>
              <label>
                Title:
                <input
                  type="text"
                  name="title"
                  placeholder="Enter quiz title"
                  required
                />
              </label>
              <br />
              <label>
                Questions:
                <textarea
                  name="questions"
                  placeholder="Enter questions (comma separated)"
                  required
                />
              </label>
              <br />
              <button type="submit">Create Quiz</button>
            </form>
          </div>
        );
      case "createAssessment":
        return (
          <div>
            <h3>Create Assessment</h3>
            <form onSubmit={handleCreateAssessment}>
              <label>
                Title:
                <input
                  type="text"
                  name="title"
                  placeholder="Enter assessment title"
                  required
                />
              </label>
              <br />
              <label>
                Total Marks:
                <input
                  type="number"
                  name="totalMarks"
                  placeholder="Enter total marks"
                  required
                />
              </label>
              <br />
              <button type="submit">Create Assessment</button>
            </form>
          </div>
        );
      default:
        return <p>Select an action to create a quiz or assessment.</p>;
    }
  };

  return (
    <div>
      <h2>Educator Dashboard</h2>
      <div>
        <button onClick={() => setAction("createQuiz")}>Create Quiz</button>
        <button onClick={() => setAction("createAssessment")}>Create Assessment</button>
      </div>
      <div>{renderActionContent()}</div>
      {successMessage && (
        <div style={{ marginTop: "20px", color: "green" }}>
          <h3>{successMessage}</h3>
        </div>
      )}
      <div>
        <h3>Quizzes</h3>
        <ul>
          {quizzes.map((quiz) => (
            <li key={quiz.id}>
              {quiz.title} - Questions: {quiz.questions}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Assessments</h3>
        <ul>
          {assessments.map((assessment) => (
            <li key={assessment.id}>
              {assessment.title} - Total Marks: {assessment.totalMarks}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EducatorDashboard;
