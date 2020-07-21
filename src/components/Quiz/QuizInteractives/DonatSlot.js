import React from "react";
import { useWindowDimension } from "./useWindowDimension";

export default function DonatSlot(props) {
  const slot = React.useRef();
  // eslint-disable-next-line
  const [width, height] = useWindowDimension();

  React.useEffect(() => {
    if (slot.current) {
      const top = slot.current.getBoundingClientRect().top + height - height;
      props.setSlotTop(top);
      console.log("top", top);
    }
    // eslint-disable-next-line
  }, [height]);

  return (
    <div
      className="slot-wrapper"
      style={{ opacity: props.donatCount > 0 ? 1 : 0 }}
    >
      <div className={"donat-slot"} ref={slot}>
        <div className="main" />
      </div>
      <div className="mask-container">
        <div className="left" />
        <div className="left-tall" />
        <div className="right" />
        <div className="right-tall" />
        <div className="lower" />
        <div className="lower-wide" />
      </div>
    </div>
  );
}
