import './App.css';
import Board from './components/board';
import Header from './components/header';
import Player from './components/player';

function App() {
  return (
    <div className="App">
      <Header />
      {/* X */}
      <Player whichPlayer="X" propOne={true} propTwo="HelloWorld" propThree={77} /> 
      {/* O */}
      <Player whichPlayer="O"/> 

      {/* 9 square components with a blue border and text "Square ?" (1-9) in the middle width and height 60px */}
      <Board />
    </div>
  );
}

export default App;
