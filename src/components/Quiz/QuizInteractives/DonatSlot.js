import React from "react";

export default function DonatSlot(props) {
  const slot = React.useRef();

  React.useEffect(() => {
    if (slot.current) {
      const top = slot.current.getBoundingClientRect().top;
      props.setSlotTop(top);
    }
    // eslint-disable-next-line
  }, []);

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
