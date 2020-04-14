//TODO: STEP 1 - Import the useState hook.
//TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
// TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state.
// TODO STEP 4 - Now we need to attach our state setter functions to click listeners.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

const TopRow = ({ homeScore, awayScore }) => {
  return (
    <div className="topRow">
      <div className="home">
        <h2 className="home__name">Lions</h2>
        <div className="home__score">{homeScore}</div>
      </div>
      <div className="timer">00:03</div>
      <div className="away">
        <h2 className="away__name">Tigers</h2>
        <div className="away__score">{awayScore}</div>
      </div>
    </div>
  );
};

function App() {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const score = (team, amount) => {
    if(team === 'Lions'){
      return setHomeScore(homeScore + amount)
    } else {
      return setAwayScore(awayScore + amount)
    }
  }  
  return (
    <div className="container">
      <section className="scoreboard">
      <TopRow homeScore={homeScore} awayScore={awayScore}/>
        <BottomRow />
      </section>{/* scoreboard end */}
      <section className="buttons">
        <div className="homeButtons">
          <button className="homeButtons__touchdown" onClick={() => score('Lions', 7)}>Lions Touchdown</button>
          <button className="homeButtons__fieldGoal"onClick={() => score('Lions', 3)}>Lions Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown"onClick={() => score('Tigers', 7)}>Tigers Touchdown</button>
          <button className="awayButtons__fieldGoal"onClick={() => score('Tigers', 3)}>Tigers Field Goal</button>
        </div>
        <div className="playStateButtons">
          <button className="homeButtons__touchdown">Down</button>
          <button className="homeButtons__fieldGoal">To Go</button>
          <button className="homeButtons__touchdown">Ball on</button>
          <button className="homeButtons__fieldGoal">Quarter</button>
        </div>
      </section>
    </div>
  );
}
export default App;