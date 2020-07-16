import React from "react";
import QuizInteractives from "./QuizInteractives/QuizInteractives";
import QuizCard from "./QuizCard";
import QuizResults from "./QuizResults/QuizResults";

export default function QuizComponent(props) {
  return (
    <div className={"quiz-component"}>
      {props.interactivesActive ? (
        <QuizInteractives
          setQuestionActive={props.setQuestionActive}
          setResultsActive={props.setResultsActive}
          setInteractivesActive={props.setInteractivesActive}
          answerStatus={props.answerStatus}
          donatCount={props.donatCount}
          setDonatCount={props.setDonatCount}
          quizData={props.quizData.questions[props.currentQuestion]}
        />
      ) : null}
      {props.questionActive ? (
        <QuizCard
          setQuestionActive={props.setQuestionActive}
          setAnswerStatus={props.setAnswerStatus}
          question={props.quizData.questions[props.currentQuestion].title}
          truth={props.quizData.questions[props.currentQuestion].truth}
        />
      ) : null}
      {props.resultsActive ? (
        <QuizResults
          answerStatus={props.answerStatus}
          results={props.quizData.questions[props.currentQuestion].results}
          currentQuestion={props.currentQuestion}
          setCurrentQuestion={props.setCurrentQuestion}
          setResultsActive={props.setResultsActive}
          setQuestionActive={props.setQuestionActive}
          setInteractivesActive={props.setInteractivesActive}
          setAnswerStatus={props.setAnswerStatus}
        />
      ) : null}
    </div>
  );
}
