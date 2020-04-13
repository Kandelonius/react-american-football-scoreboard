//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  const [homeTeam, setHomeName] = useState("Lions");
  const [awayTeam, setAwayName] = useState("Tigers");
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  
  const homeTouchdown = event =>{
    setHomeScore(homeScore + 7)
  }
  const homeFieldGoal = event =>{
    setHomeScore(homeScore + 3)
  }
  const awayTouchdown = event =>{
    setAwayScore(awayScore + 7)
  }
  const awayFieldGoal = event =>{
    setAwayScore(awayScore + 3)
  }
  //   const team = event.target.name
    // if (team === homeTouchdown){
    //   setHomeScore(homeScore + 7);
    // }else if(team === homeFeildGoal) {
    //   setHomeScore(homeScore + 3)
    // }else if(team === awayTouchdown){
    //   setAwayScore(awayScore + 7)
    // }else {
    //   setAwayScore(awayScore + 3)
    
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{homeTeam}</h2>
            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">{awayTeam}</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>{/* scoreboard end */}
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={homeTouchdown}>{homeTeam} Touchdown</button>
          <button className="homeButtons__fieldGoal"onClick={homeFieldGoal}>{homeTeam} Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown"onClick={awayTouchdown}>{awayTeam} Touchdown</button>
          <button className="awayButtons__fieldGoal"onClick={awayFieldGoal}>{awayTeam} Field Goal</button>
        </div>
      </section>
    </div>
  );
}
export default App;
