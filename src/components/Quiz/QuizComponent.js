import React from "react";
import QuizInteractives from "./QuizInteractives/QuizInteractives";
import QuizCard from "./QuizCard";
import QuizResults from "./QuizResults/QuizResults";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function QuizComponent(props) {
  return (
    <div className={"quiz-component"}>
      {props.quizDone ? (
        <motion.div
          className="quiz-done-container"
          initial={{ opacity: 0, y: "-100px" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <div className="emoji">👏</div>
          <h1>Glückwunsch!</h1>
          <h2>Du hast dieses Quiz durchgespielt!</h2>
          <h5>Mehr Quizzes findest Du im Quizarchiv auf der Startseite.</h5>
          <Link to={"/"}>
            <button className="small">Zur Startseite</button>
          </Link>
        </motion.div>
      ) : (
        <>
          {props.interactivesActive ? (
            <QuizInteractives
              setQuestionActive={props.setQuestionActive}
              setResultsActive={props.setResultsActive}
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
              totalQuestions={props.quizData.questions.length}
              currentQuestion={props.currentQuestion}
              setCurrentQuestion={props.setCurrentQuestion}
              setResultsActive={props.setResultsActive}
              setQuestionActive={props.setQuestionActive}
              interactivesActive={props.interactivesActive}
              setInteractivesActive={props.setInteractivesActive}
              setAnswerStatus={props.setAnswerStatus}
              setViewFixed={props.setViewFixed}
              setQuizDone={props.setQuizDone}
            />
          ) : null}
        </>
      )}
    </div>
  );
}
