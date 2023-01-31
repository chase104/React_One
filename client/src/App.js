import './App.css';
import { useState } from 'react';
import Board from './components/board';
import Header from './components/header';
import Player from './components/player';

function App() {

  let [winner, setWinner] = useState("X");
  console.log(winner);
  // O now wins!

  setTimeout(() => {
    if (winner == "X") {
      setWinner("O")
    } else {
      setWinner("X")
    }
  }, 3000)

  return (
    <div className="App">
      
      <Header />
      <Player whichPlayer="X" winner={winner} propOne={true} propTwo="HelloWorld" propThree={77} /> 
      <Player whichPlayer="O" winner={winner}/> 
      <Board />
    </div>
  );
}

export default App;
