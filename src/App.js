import "./App.css";
import questions from "./questions";

function App() {
  return (
    <div>
      {questions.map((question) => (
        <div key={question.id}>{question.question}</div>
      ))}
    </div>
  );
}

export default App;
