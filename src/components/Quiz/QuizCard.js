import React from "react";
import { motion, useAnimation } from "framer-motion";

export default function QuizCard(props) {
  const [randomColor, setRandomColor] = React.useState();

  const cardSwipe = useAnimation();
  const posSwipe = useAnimation();
  const negSwipe = useAnimation();

  cardSwipe.start({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.75,
      y: { type: "spring", stiffness: 100, damping: 15 },
      default: { duration: 0.8 },
    },
  });

  const sequence = async () => {
    await cardSwipe.start({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.35,
        y: { type: "spring", stiffness: 100, damping: 15 },
        default: { duration: 0.8 },
      },
    });

    return await cardSwipe.start({
      x: [0, -42, 42, 0],
      rotateZ: [0, -2, 2, 0],
      transition: {
        delay: 1,
        duration: 1.2,
        ease: "easeInOut",
        loop: Infinity,
        repeatDelay: 2,
      },
    });
  };
  sequence();

  function dragHandler(event, info) {
    const xValue = info.point.x;
    cardSwipe.stop();

    cardSwipe.start({
      rotate: xValue / 50,
      opacity: 1 - Math.abs(xValue) / 300,
      transition: { duration: 0.03 },
    });

    if (xValue > 0) {
      //swipe to right
      posSwipe.start({
        opacity: Math.abs(xValue) / 5,
        transition: { duration: 0.07 },
      });
      negSwipe.start({
        opacity: 0,
        transition: { duration: 0.01 },
      });
    } else if (xValue < 0) {
      //swipe to left
      negSwipe.start({
        opacity: Math.abs(xValue) / 5,
        transition: { duration: 0.07 },
      });
      posSwipe.start({
        opacity: 0,
        transition: { duration: 0.01 },
      });
    }
  }

  function dragEndHandler(event, info) {
    // WHEN CARD IS RELEASED
    let xValue = info.point.x;
    const xVelocity = info.velocity.x;
    const xThreshold = window.innerWidth / 2.5;

    if (xValue > xThreshold || (xValue <= xThreshold && xVelocity > 750)) {
      // eslint-disable-next-line
      xValue < xThreshold ? (xValue = xThreshold) : (xValue = xValue);

      // right edge
      cardSwipe.start({
        y: 0,
        x: xValue + 250,
        rotate: xValue / 40,
        opacity: 0,
      });

      posSwipe.start({
        opacity: 0,
        transition: { duration: 1, delay: 0 },
      });
      negSwipe.start({
        opacity: 0,
        transition: { duration: 0.01, delay: 0 },
      });
      setTimeout(() => {
        props.setQuestionActive(false);

        if (props.truth) {
          props.setAnswerStatus(true);
        } else {
          props.setAnswerStatus(false);
        }
      }, 1000);
    } else if (
      xValue < -xThreshold ||
      (xValue > -xThreshold && xVelocity < -750)
    ) {
      // eslint-disable-next-line
      xValue > -xThreshold ? (xValue = -xThreshold) : (xValue = xValue);
      // left edge
      cardSwipe.start({
        y: 0,
        x: xValue - 250,
        rotate: xValue / 40,
        opacity: 0,
        transitionEnd: { display: "none" },
      });

      negSwipe.start({
        opacity: 0,
        transition: { duration: 1, delay: 0 },
      });
      posSwipe.start({
        opacity: 0,
        transition: { duration: 0.01, delay: 0 },
      });

      setTimeout(() => {
        props.setQuestionActive(false);

        if (!props.truth) {
          props.setAnswerStatus(true);
        } else {
          props.setAnswerStatus(false);
        }
      }, 1000);
    } else {
      // reset
      cardSwipe.start({
        y: 0,
        x: 0,
        rotate: 0,
        rotateZ: 0,
        opacity: 1,
      });
      posSwipe.start({
        opacity: 0,
      });
      negSwipe.start({
        opacity: 0,
      });
    }
  }

  const colorSchemes = [
    "yellow-gradient",
    "purple-gradient",
    "pink-gradient",
    "green-gradient",
  ];

  React.useEffect(() => {
    setRandomColor(
      colorSchemes[Math.floor(Math.random() * colorSchemes.length)]
    );
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <motion.div
        className={"quiz-card " + randomColor}
        drag
        dragConstraints={{ bottom: 0, top: 0 }}
        dragElastic={0.1}
        onDrag={dragHandler}
        onDragEnd={dragEndHandler}
        animate={cardSwipe}
        initial={{
          y: "-100%",
          opacity: 0,
        }}
      >
        {props.question}
      </motion.div>
      <motion.div className="right-answer answer-overlay" animate={posSwipe}>
        <span>Stimmt!</span>
      </motion.div>
      <motion.div className="wrong-answer answer-overlay" animate={negSwipe}>
        <span>Stimmt nicht!</span>
      </motion.div>
    </>
  );
}

QuizCard.defaultProps = {
  question: "Stimmt es, dass Donald Trump ziemlich bescheuert und dicht ist?",
  truth: true,
};
