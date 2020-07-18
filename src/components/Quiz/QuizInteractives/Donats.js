import React from "react";
import { motion, useAnimation } from "framer-motion";

import donat from "../../../assets/donat.png";

export default function Donats(props) {
  let initialState;
  if (props.donatCount >= 4) {
    initialState = "";
  } else if (props.donatCount === 3) {
    initialState = "two-left";
  } else if (props.donatCount === 2) {
    initialState = "one-left";
  } else if (props.donatCount <= 1) {
    initialState = "zero-left";
  }

  const [uiDonatCount, setUiDonatCount] = React.useState(props.donatCount);
  const [dragging, setDragging] = React.useState(initialState);
  const [isDraggable, setDraggable] = React.useState(true);
  const [donatHeight, setDonatHeight] = React.useState();

  const donatAnimation = useAnimation();
  const draggableDonat = React.useRef();

  console.log("window.innerHeight: ", window.innerHeight);

  React.useEffect(() => {
    if (props.answerStatus) {
      // correct answer response
      setDragClasses();
      let countInt = parseInt(uiDonatCount, 10);
      let newCount = countInt + 1;
      setUiDonatCount(newCount);

      const sequence = async () => {
        await donatAnimation.start({
          x: 0,
          y: 0,
          scale: 1,
        });

        return await showResults();
      };

      function showResults() {
        props.setDonatCount(newCount);
        props.setResultsActive(true);
      }
      sequence();
    } else if (props.answerStatus === false) {
      // wrong answer response
      const newCount = props.donatCount - 1;

      const sequence = async () => {
        await donatAnimation.start({
          x: 0,
          y: [
            props.slotTop - donatHeight + 15,
            props.slotTop - donatHeight * 1.07,
            props.slotTop,
          ],
          scale: [1, 1, 0.8],
          opacity: [1, 1, 0],
          transition: {
            duration: 1.2,
            delay: 0.5,
            ease: "easeOut",
          },
        });
        return await showResults();
      };

      function showResults() {
        props.setDonatCount(newCount);
        props.setResultsActive(true);
      }
      sequence();
    }
    // eslint-disable-next-line
  }, [props.answerStatus]);

  React.useEffect(() => {
    if (draggableDonat.current) {
      const height = draggableDonat.current.clientHeight;
      setDonatHeight(height);
    }
  }, []);

  function donatDragStart() {
    setDragClasses(true);

    let countInt = parseInt(uiDonatCount, 10);
    let newCount = countInt - 1;

    setUiDonatCount(newCount);
    props.setTipOpacity(0);
  }

  function donatDragEnd(event, info) {
    const dragAmount = info.point;

    console.log("donatHeigt: ", donatHeight, "props.slotTop: ", props.slotTop);

    if (dragAmount.y + donatHeight < props.slotTop - donatHeight / 1.5) {
      setDragClasses();
      resetDonat();
      props.setTipOpacity(1);
    } else {
      donatAnimation.start({
        x: 0,
        y: props.slotTop - donatHeight + 15,
        scale: 1,
        transition: {
          ease: [0.16, 1, 0.3, 1],
          type: "tween",
          duration: 2,
        },
      });
      setDraggable(false);
      props.setTipOpacity(0);
      props.setQuestionActive(true);
    }
  }

  function resetDonat() {
    // reset counter
    let countInt = parseInt(uiDonatCount, 10);
    let newCount = countInt + 1;
    setUiDonatCount(newCount);

    donatAnimation.start({
      //todo: make donat "wiggle" while moving
      x: 0,
      y: 0,
      scale: 1,
    });
  }

  function setDragClasses(isDragging) {
    if (props.donatCount >= 4) {
      isDragging ? setDragging("dragging") : setDragging("");
    } else if (props.donatCount === 3) {
      isDragging ? setDragging("dragging two-left") : setDragging("two-left");
    } else if (props.donatCount === 2) {
      isDragging ? setDragging("dragging one-left") : setDragging("one-left");
    } else if (props.donatCount <= 1) {
      isDragging ? setDragging("dragging zero-left") : setDragging("zero-left");
    }
  }

  return (
    <div className={"donats " + dragging}>
      {props.donatCount > 0 ? (
        <motion.div
          className={"draggable-donat"}
          animate={donatAnimation}
          drag={isDraggable}
          dragElastic={0.1}
          dragMomentum={true}
          onDragEnd={donatDragEnd}
          onDragStart={donatDragStart}
          whileTap={{
            scale: 1.3,
            filter: "drop-shadow(0px 20px 15px rgba(144,85,31,0.4))",
            transition: {},
          }}
          ref={draggableDonat}
        >
          <img src={donat} alt={"donat"} />
        </motion.div>
      ) : (
        <div className="draggable-donat" style={{ opacity: "0" }}>
          <img src={donat} alt={"donat"} />
        </div>
      )}

      <div className="donat-stack">
        <img className="third" src={donat} alt={"donat"} />
        <img className="second" src={donat} alt={"donat"} />
        <img className="first" src={donat} alt={"donat"} />
      </div>
      <div className="counter">{uiDonatCount}</div>
    </div>
  );
}

Donats.defaultProps = {
  donatCount: 5,
};
