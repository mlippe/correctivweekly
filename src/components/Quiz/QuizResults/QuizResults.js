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

  function panHandler(event, info) {
    setScrollHint(false);
  }

  function clickHandler() {
    const nextQuestion = props.currentQuestion + 1;
    props.setResultsActive(false);
    props.setQuestionActive(false);
    props.setAnswerStatus(null);
    props.setCurrentQuestion(nextQuestion);
    props.setInteractivesActive(true);
  }

  return (
    <motion.div
      className={"quiz-results"}
      onPanStart={panHandler}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: { duration: 1, ease: "easeOut" },
      }}
    >
      {scrollHint ? (
        <div className="scroll-down-hint">
          <div className="arrow">
            <Arrow />
          </div>
        </div>
      ) : null}

      <ResultsTop
        answerStatus={props.answerStatus}
        subtitle={props.results.subtitle}
        posPercentStat={props.results.posPercentStat}
      />
      <CorrectiBot botData={props.results.chatbot} />
      <OriginalArticle articleData={props.results.originalArticle} />
      <MoreInfo infoData={props.results.moreInfo} />
      <Link to={"/quiz"}>
        <button className="big" onClick={clickHandler}>
          Nächste Frage
        </button>
      </Link>
    </motion.div>
  );
}
