import { useState } from "react";
import "./App.css";
import questions from "./questions";

function App() {
  const [questionId, setQuestionId] = useState(null);

  const handleClick = (id) => {
    setQuestionId(id === questionId ? null : id);
  };

  return (
    <div>
      {questions.map((question) => (
        <div key={question.id} onClick={() => handleClick(question.id)}>
          {questionId === question.id ? question.answer : question.question}
        </div>
      ))}
    </div>
  );
}

export default App;
