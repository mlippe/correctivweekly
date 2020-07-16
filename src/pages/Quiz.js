import React from "react";
import QuizComponent from "../components/Quiz/QuizComponent";

export default function Quiz(props) {
  const [questionActive, setQuestionActive] = React.useState(false);
  const [resultsActive, setResultsActive] = React.useState(false);
  const [interactivesActive, setInteractivesActive] = React.useState(true);
  const [answerStatus, setAnswerStatus] = React.useState(null);

  return (
    <div className={resultsActive ? "quiz-view" : "quiz-view fixed"}>
      <QuizComponent
        questionActive={questionActive}
        setQuestionActive={setQuestionActive}
        resultsActive={resultsActive}
        setResultsActive={setResultsActive}
        answerStatus={answerStatus}
        setAnswerStatus={setAnswerStatus}
        interactivesActive={interactivesActive}
        setInteractivesActive={setInteractivesActive}
        donatCount={props.donatCount}
        setDonatCount={props.setDonatCount}
        quizData={props.quizData}
        currentQuestion={props.currentQuestion}
        setCurrentQuestion={props.setCurrentQuestion}
      />
    </div>
  );
}
