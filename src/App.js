import React from "react";
import "./styles.scss";
import { Route, Switch, useLocation } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar.js";

import Home from "./pages/Home.js";
import Profile from "./pages/Profile.js";
import Leaderboard from "./pages/Leaderboard.js";
import Quiz from "./pages/Quiz.js";
import ArchivedQuiz from "./pages/ArchivedQuiz.js";

import data from "./data.json";

export default function App() {
  const [currentView, setCurrentView] = React.useState("");
  const [donatCount, setDonatCount] = React.useState(data.data.user.donats);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [quizData, setQuizData] = React.useState(data.data.quiz);

  /*   console.log(data.data.user);
   */

  let location = useLocation();
  React.useEffect(() => {
    if (location.pathname === "/") {
      setCurrentView("home");
    } else if (location.pathname === "/profile") {
      setCurrentView("profile");
    } else if (location.pathname === "/leaderboard") {
      setCurrentView("leaderboard");
    } else if (location.pathname === "/quiz") {
      setCurrentView("quiz");
      setQuizData(data.data.quiz);
    } else if (location.pathname === "/archived-quiz") {
      setCurrentView("quiz");
      setQuizData(data.data.archivedQuiz);
    }
  }, [location]);

  return (
    <div className="App">
      <NavBar
        currentView={currentView}
        donatCount={donatCount}
        quizData={quizData}
        currentQuestion={currentQuestion}
      />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/profile"
          exact
          render={(props) => (
            <Profile
              {...props}
              donatCount={donatCount}
              setDonatCount={setDonatCount}
            />
          )}
        />
        <Route path="/leaderboard" exact component={Leaderboard} />
        <Route
          path="/quiz"
          exact
          render={(props) => (
            <Quiz
              {...props}
              donatCount={donatCount}
              setDonatCount={setDonatCount}
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              quizData={quizData}
            />
          )}
        />
        <Route
          path="/archived-quiz"
          exact
          render={(props) => (
            <ArchivedQuiz
              {...props}
              donatCount={donatCount}
              setDonatCount={setDonatCount}
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              quizData={quizData}
            />
          )}
        />
      </Switch>
    </div>
  );
}
