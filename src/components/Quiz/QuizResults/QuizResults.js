import React from "react";
import ResultsTop from "./ResultsTop";
import { ReactComponent as Arrow } from "../../../assets/arrow-white.svg";
import { motion, useAnimation } from "framer-motion";
import CorrectiBot from "./CorrectiBot";
import OriginalArticle from "./OriginalArticle";
import { Link } from "react-router-dom";
import MoreInfo from "./MoreInfo";
import { useInView } from "react-intersection-observer";

export default function QuizResults(props) {
  const scrollHintAnimation = useAnimation();
  const [nextButtonVisible, setNextButtonVisible] = React.useState(false);
  const [ref, inView] = useInView({
    threshold: 0,
  });

  React.useEffect(() => {
    //scrollHintAnimation.start({ y: 0, opacity: 1 });
    if (props.interactivesActive) {
      setTimeout(() => {
        props.setInteractivesActive(false);
        props.setViewFixed(false);
      }, 2500);
    }
    // eslint-disable-next-line
  }, [props.interactivesActive]);

  React.useEffect(() => {
    if (inView) {
      setNextButtonVisible(true);
    } else {
      setNextButtonVisible(false);
    }
  }, [inView]);

  function panStartHandler(event, info) {
    let timeOut;
    scrollHintAnimation.start({ y: "100%", opacity: 0 });
    clearTimeout(timeOut);

    if (nextButtonVisible) {
      return;
    }

    timeOut = setTimeout(() => {
      scrollHintAnimation.start({ y: 0, opacity: 1 });
    }, 2500);
  }

  function clickHandler() {
    let nextQuestion;
    console.log(
      "props.currentQuestion + 1 ",
      props.currentQuestion + 1,
      "props.totalQuestions ",
      props.totalQuestions
    );

    if (props.currentQuestion + 1 < props.totalQuestions) {
      nextQuestion = props.currentQuestion + 1;
    } else if (props.currentQuestion + 1 === props.totalQuestions) {
      nextQuestion = props.currentQuestion;
      props.setQuizDone(true);
    }
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
      onPanStart={panStartHandler}
      initial={{
        y: "-60px",
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
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
            duration: 0.5,
            delay: 0.5,
          },
        }}
      />

      <motion.div
        className="scroll-down-hint"
        animate={scrollHintAnimation}
        transition={{ type: "tween", ease: "easeInOut", duration: 0.6 }}
      >
        <div className="arrow">
          <Arrow />
        </div>
      </motion.div>

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
      <div className={"bottom-button-container"} ref={ref}>
        <Link to={"/quiz"}>
          <button className="big" onClick={clickHandler}>
            Nächste Frage
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
