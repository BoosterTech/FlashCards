import { useState } from "react";
import questions from "./questions";
import { Card, Wrapper } from "./styled";

function App() {
  const [questionId, setQuestionId] = useState(null);
  const handleClick = (id) => {
    setQuestionId(id === questionId ? null : id);
  };

  return (
    <Wrapper>
      {questions.map((question) => (
        <Card
          key={question.id}
          onClick={() => handleClick(question.id)}
          $selected={questionId === question.id}
        >
          {questionId === question.id ? question.answer : question.question}
        </Card>
      ))}
    </Wrapper>
  );
}

export default App;
