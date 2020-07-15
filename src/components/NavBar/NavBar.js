import React from "react";
import { Link } from "react-router-dom";

import donat from "../../assets/donat.png";
import { ReactComponent as LogoIc } from "../../assets/correctiv-weekly.svg";
import { ReactComponent as LeaderboardIc } from "../../assets/leaderboard.svg";
import { ReactComponent as ProfileIc } from "../../assets/profile.svg";
import { ReactComponent as CloseIc } from "../../assets/close.svg";
import { ReactComponent as SettingsIc } from "../../assets/settings.svg";

export default function NavBar(props) {
  React.useEffect(() => {
    const imageList = [donat];
    imageList.forEach(image => {
      new Image().src = image;
    });
  });

  return (
    <div className={"nav-bar"}>
      {props.currentView === "home" ? (
        <>
          <div className={"left"}>
            <div className={"logo"}>
              <Link to={"/"}>
                <LogoIc />
              </Link>
            </div>
          </div>
          <div className={"right"}>
            <div className={"logo-container"}>
              <Link to={"/leaderboard"}>
                <LeaderboardIc />
              </Link>
              <Link to={"/profile"}>
                <ProfileIc />
              </Link>
            </div>
          </div>
        </>
      ) : null}
      {props.currentView === "profile" ? (
        <>
          <div className={"left"}>
            <div className={"donat-count"}>
              <img src={donat} alt={"donat"} />
              <div className="number">{props.donatCount}</div>
            </div>
          </div>
          <div className={"center"}>Profil</div>
          <div className={"right"}>
            <div className={"logo-container"}>
              <SettingsIc />
              <Link to={"/"}>
                <CloseIc />
              </Link>
            </div>
          </div>
        </>
      ) : null}
      {props.currentView === "leaderboard" ? (
        <>
          <div className={"left"}>
            <div className={"logo"}>
              <Link to={"/"}>
                <LogoIc />
              </Link>
            </div>
          </div>
          <div className={"center"}>Bestenliste</div>
          <div className={"right"}>
            <div className={"logo-container"}>
              <Link to={"/profile"}>
                <ProfileIc />
              </Link>
              <Link to={"/"}>
                <CloseIc />
              </Link>
            </div>
          </div>
        </>
      ) : null}
      {props.currentView === "quiz" ? (
        <>
          <div className={"left"}>
            <div className={"logo"}>
              <Link to={"/"}>
                <LogoIc />
              </Link>
            </div>
          </div>
          <div className={"center progress"}>
            <span className="current">{props.currentQuestion + 1}</span>
            <span className="of"> von </span>
            <span className="total">{props.quizData.questions.length}</span>
          </div>
          <div className={"right"}>
            <div className={"logo-container"}>
              <Link to={"/leaderboard"}>
                <LeaderboardIc />
              </Link>
              <Link to={"/profile"}>
                <ProfileIc />
              </Link>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
