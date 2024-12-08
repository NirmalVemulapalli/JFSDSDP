import React, { useState } from "react";

const LearningDashboard = () => {
  const [action, setAction] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [courses, setCourses] = useState([
    { id: 1, name: "Introduction to the Indian Constitution", description: "Learn the basics of the Indian Constitution", enrolled: false },
    { id: 2, name: "Fundamental Rights and Duties", description: "Understand the fundamental rights and duties of Indian citizens", enrolled: false },
    { id: 3, name: "The Structure of Indian Government", description: "Explore the structure and functioning of the Indian government", enrolled: false },
  ]);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [progress, setProgress] = useState({
    1: { completed: 0 },
    2: { completed: 0 },
    3: { completed: 0 },
  });
  const [quizScore, setQuizScore] = useState({});

  const handleEnrollCourse = (courseId) => {
    setCourses(courses.map(course => course.id === courseId ? { ...course, enrolled: true } : course));
    setSuccessMessage("You have successfully enrolled in the course!");
  };

  const handleTrackProgress = (courseId) => {
    return progress[courseId]?.completed + "%";
  };

  const handleTakeQuiz = (courseId) => {
    // Simulate quiz completion and scoring
    const score = Math.floor(Math.random() * 100);
    setQuizScore({
      ...quizScore,
      [courseId]: score,
    });
    setSuccessMessage(`You scored ${score} on the quiz!`);
  };

  const renderActionContent = () => {
    switch (action) {
      case "view":
        return (
          <div>
            <h3>View Courses</h3>
            <ul>
              {courses.map((course) => (
                <li key={course.id}>
                  {course.name} - {course.description}{" "}
                  {!course.enrolled ? (
                    <button onClick={() => handleEnrollCourse(course.id)}>
                      Enroll
                    </button>
                  ) : (
                    <span>Enrolled</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        );
      case "track":
        return (
          <div>
            <h3>Track Progress</h3>
            <ul>
              {courses.map((course) => (
                <li key={course.id}>
                  {course.name} - Progress: {handleTrackProgress(course.id)}
                </li>
              ))}
            </ul>
          </div>
        );
      case "quiz":
        return (
          <div>
            <h3>Take Quiz</h3>
            <ul>
              {courses.map((course) => (
                <li key={course.id}>
                  {course.name}{" "}
                  {course.enrolled ? (
                    <button onClick={() => handleTakeQuiz(course.id)}>
                      Take Quiz
                    </button>
                  ) : (
                    <span>Enroll in the course to take the quiz</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        );
      default:
        return <p>Select an action to manage courses.</p>;
    }
  };

  return (
    <div>
      <h2>Learning Dashboard: Indian Constitution</h2>
      <div>
        <button style={{ margin: "10px" }} onClick={() => setAction("view")}>
          View Courses
        </button>
        <button style={{ margin: "10px" }} onClick={() => setAction("track")}>
          Track Progress
        </button>
        <button style={{ margin: "10px" }} onClick={() => setAction("quiz")}>
          Take Quiz
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

export default LearningDashboard;
