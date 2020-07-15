import React from "react";

export default function ResultsStats(props) {
  return (
    <div className={"results-stats"}>
      <h5 className="title">Bisherige Antworten</h5>
      <div className="bar-wrapper">
        <div className="bar" />
        <div className="text-wrapper">
          <div className="percentage">78%</div>
          <div className="answered">Wählten "nein"</div>
        </div>
      </div>
    </div>
  );
}
