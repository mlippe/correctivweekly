import React from "react";
import ResultsTop from "./ResultsTop";
import { ReactComponent as Arrow } from "../../../assets/arrow-white.svg";
import { motion } from "framer-motion";
import CorrectiBot from "./CorrectiBot";
import OriginalArticle from "./OriginalArticle";
import { Link } from "react-router-dom";
import MoreInfo from "./MoreInfo";

export default function QuizResults(props) {
  const [scrollHint, setScrollHint] = React.useState(true);

  React.useEffect(() => {
    if (props.interactivesActive) {
      setTimeout(() => {
        props.setInteractivesActive(false);
        props.setViewFixed(false);
      }, 1800);
    }
  }, [props.interactivesActive]);

  function panHandler(event, info) {
    setScrollHint(false);
  }

  function clickHandler() {
    const nextQuestion = props.currentQuestion + 1;
    props.setResultsActive(false);
    props.setQuestionActive(false);
    props.setAnswerStatus(null);
    props.setViewFixed(true);
    props.setCurrentQuestion(nextQuestion);
    props.setInteractivesActive(true);
  }

  return (
    <motion.div
      className={"quiz-results"}
      onPanStart={panHandler}
      initial={{
        y: "-60px",
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 2,
          type: "spring",
          stiffness: 200,
          damping: 15,
        },
      }}
    >
      <motion.div
        className="background"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 1,
            delay: 1,
          },
        }}
      />
      {scrollHint ? (
        <div className="scroll-down-hint">
          <div className="arrow">
            <Arrow />
          </div>
        </div>
      ) : null}

      {props.answerStatus ? (
        <motion.div
          className="correct-answer-next"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 3,
              delay: 3,
            },
          }}
        >
          <Link to={"/quiz"}>
            <button className="small" onClick={clickHandler}>
              Weiter {">"}
            </button>
          </Link>
        </motion.div>
      ) : null}

      <ResultsTop
        answerStatus={props.answerStatus}
        subtitle={props.results.subtitle}
        posPercentStat={props.results.posPercentStat}
      />
      <CorrectiBot botData={props.results.chatbot} />
      <OriginalArticle articleData={props.results.originalArticle} />
      <MoreInfo infoData={props.results.moreInfo} />
      <div className={"bottom-button-container"}>
        <Link to={"/quiz"}>
          <button className="big" onClick={clickHandler}>
            Nächste Frage
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
