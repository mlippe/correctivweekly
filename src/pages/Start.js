import React from "react";
import LogoAnimation from "../components/Start/LogoAnimation";
import Onboarding from "../components/Start/Onboarding";

export default function Start(props) {
  const [startAnimationFinished, setStartAnimationFinished] = React.useState(
    false
  );
  const [lastSlide, setLastSlide] = React.useState(false);

  return (
    <div className={lastSlide ? "start-view is-last" : "start-view"}>
      {startAnimationFinished === false ? (
        <LogoAnimation setStartAnimationFinished={setStartAnimationFinished} />
      ) : null}
      {startAnimationFinished ? (
        <Onboarding lastSlide={lastSlide} setLastSlide={setLastSlide} />
      ) : null}
    </div>
  );
}
