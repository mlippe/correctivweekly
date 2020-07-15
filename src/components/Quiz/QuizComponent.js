import React from "react";
import QuizInteractives from "./QuizInteractives/QuizInteractives";
import QuizCard from "./QuizCard";
import QuizResults from "./QuizResults/QuizResults";

export default function QuizComponent(props) {
  const [questionActive, setQuestionActive] = React.useState(false);
  const [resultsActive, setResultsActive] = React.useState(false);
  const [answerStatus, setAnswerStatus] = React.useState(null);

  return (
    <div className={"quiz-component"}>
      <QuizInteractives
        setQuestionActive={setQuestionActive}
        answerStatus={answerStatus}
        donatCount={props.donatCount}
        setDonatCount={props.setDonatCount}
        quizData={props.quizData.questions[props.currentQuestion]}
      />
      {questionActive ? (
        <QuizCard
          setQuestionActive={setQuestionActive}
          setAnswerStatus={setAnswerStatus}
          setResultsActive={setResultsActive}
          question={props.quizData.questions[props.currentQuestion].title}
          truth={props.quizData.questions[props.currentQuestion].truth}
        />
      ) : null}
      {resultsActive ? (
        <QuizResults
          answerStatus={answerStatus}
          results={props.quizData.questions[props.currentQuestion].results}
        />
      ) : null}
    </div>
  );
}
