import React from "react";
import QuizComponent from "../components/Quiz/QuizComponent";

export default function ArcivedQuiz(props) {
  return (
    <div className="quiz-view">
      <QuizComponent
        donatCount={props.donatCount}
        setDonatCount={props.setDonatCount}
        quizData={props.quizData}
        currentQuestion={props.currentQuestion}
        setCurrentQuestion={props.setCurrentQuestion}
      />
    </div>
  );
}
