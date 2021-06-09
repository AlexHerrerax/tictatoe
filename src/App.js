import React, { useState } from "react";
import InputOptions from "./components/InputOptions";
import Game from './components/Game'


const App = () => {
  const [runGame, setRunGame] = useState(false);
  const [chooseX, setChooseX] = useState(true);

  /*   */

  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  const playerHandler1 = (e) => {
    setPlayer1(e.target.value)
}
const playerHandler2 = (e) => {
    setPlayer2(e.target.value)
}

  function showGame(chooseX) {
    setChooseX(chooseX);
    setRunGame(true);
  }

  return (
    <>
      
      {runGame === true ? (
        <Game 
        chooseX={chooseX}
        player1={player1} 
        player2={player2} />
      ) : (
        <InputOptions
          startGame={showGame} 
          playerHandler1={playerHandler1} 
          playerHandler2={playerHandler2}
          player1={player1} 
        player2={player2} />
      )}
    </>
  );
};

export default App;