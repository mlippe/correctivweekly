import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import DonatCard from "./DonatCard";
import Footer from "../Footer/Footer";

export default function ProfileDonats(props) {
  const [visible, setVisible] = React.useState("");
  const [fullVisibility, setfullVisibility] = useState("collapsed");
  const [overlayVisible, setOverlayVisible] = useState(true);

  const [ref, inView] = useInView({
    threshold: 0.2
  });

  React.useEffect(() => {
    if (inView) {
      setVisible("animation-visible");
    }
  }, [inView]);

  function handleClick() {
    setfullVisibility("");
  }

  function handleTransitionEnd() {
    setOverlayVisible(false);
  }

  return (
    <div className={"profile-donats scroll-animation " + visible} ref={ref}>
      <h1>Donats</h1>
      <div className={"donat-subtitle"}>
        Du hast <span>{props.donatCount}</span> Donats. Hier kannst du mehr
        Donats kaufen:
      </div>
      <div className="donat-cards">
        <div className="row">
          <DonatCard
            colorScheme={"yellow-gradient"}
            amount={10}
            price={"5 €"}
            setDonatCount={props.setDonatCount}
            donatCount={props.donatCount}
          />
          <DonatCard
            colorScheme={"pink-gradient"}
            amount={25}
            price={"10 €"}
            setDonatCount={props.setDonatCount}
            donatCount={props.donatCount}
          />
        </div>
        <div className="row">
          <DonatCard
            colorScheme={"purple-gradient"}
            amount={60}
            price={"20 €"}
            setDonatCount={props.setDonatCount}
            donatCount={props.donatCount}
          />
          <DonatCard
            colorScheme={"green-gradient"}
            amount={125}
            price={"30 €"}
            setDonatCount={props.setDonatCount}
            donatCount={props.donatCount}
          />
        </div>
      </div>
      <div className="explanation">
        <div className={"headline"}>Was sind Donats?</div>
        <div
          className={"text-container " + fullVisibility}
          onTransitionEnd={handleTransitionEnd}
          onClick={handleClick}
        >
          <div className={"text"}>
            Mit Donats kannst Du Fragen in den wöchentlichen Quizzes
            freischalten.
            <br />
            <br />
            Um eine Frage freizuschalten, musst Du einen Donat einsetzen.
            <br />
            Ohne Donats kannst Du keine Fragen mehr beantworten.
            <br />
            <br />
            Gibst Du die richtige Antwort auf die Frage, erhälst Du Deinen
            eingesetzten Donat zurück.
            <br />
            Antwortest Du jedoch falsch, verlierst Du Deinen eingesetzen Donat.
            <br />
            <br />
            Jeden Tag erhälst Du einen Gratis-Donat. Durch den Kauf von
            zusätzlichen Donats hilfst Du uns auch weiterhin unabhängigen
            Journalismus zu betreiben. Alle Erlöse kommen Correctiv.org zu Gute.
          </div>
          {overlayVisible ? <div className="gradient-overlay" /> : null}
        </div>
      </div>
      <Footer />
    </div>
  );
}
