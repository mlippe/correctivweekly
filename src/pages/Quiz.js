import React from "react";
import QuizComponent from "../components/Quiz/QuizComponent";

export default function Quiz(props) {
  const [questionActive, setQuestionActive] = React.useState(false);
  const [resultsActive, setResultsActive] = React.useState(false);
  const [interactivesActive, setInteractivesActive] = React.useState(true);
  const [answerStatus, setAnswerStatus] = React.useState(null);
  const [viewFixed, setViewFixed] = React.useState(true);
  const [quizDone, setQuizDone] = React.useState(false);

  return (
    <div className={viewFixed ? "quiz-view fixed" : "quiz-view"}>
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
        setViewFixed={setViewFixed}
        quizDone={quizDone}
        setQuizDone={setQuizDone}
      />
    </div>
  );
}
