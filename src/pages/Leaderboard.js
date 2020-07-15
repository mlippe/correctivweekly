import React from "react";
import LeaderboardTop from "../components/Leaderboard/LeaderboardTop";
import TopTen from "../components/Leaderboard/TopTen";
import MoreScores from "../components/Leaderboard/MoreScores";
import Footer from "../components/Footer/Footer";

export default function Leaderboard() {
  return (
    <div className={"leaderboard-view"}>
      <LeaderboardTop />
      <TopTen />
      <MoreScores />
      <Footer />
    </div>
  );
}
