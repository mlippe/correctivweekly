import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../../../assets/arrow.svg";

export default function InteractionTip(props) {
  return (
    <div className={"interaction-tip"} style={{ opacity: props.tipOpacity }}>
      {props.donatCount > 0 ? (
        <>
          <div className="text">
            Ziehe eine Donat in den Schlitz, um eine Fragenkarte zu erhalten.
          </div>
          <div className="arrow">
            <Arrow />
          </div>
        </>
      ) : (
        <div className="no-donats-wrap">
          <div className="text">
            Oh nein!
            <br />
            Du hast keine Donats mehr. Im Profil kannst Du neue kaufen.
          </div>
          <Link to={"/profile"}>
            <button className="small">Zum Profil</button>
          </Link>
        </div>
      )}
    </div>
  );
}
