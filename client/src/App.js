import './App.css';
import Board from './components/board';
import Header from './components/header';
import Player from './components/player';

function App() {
  return (
    <div className="App">
      <Header />
      <Player whichPlayer="X" propOne={true} propTwo="HelloWorld" propThree={77} /> 
      <Player whichPlayer="O"/> 
      <Board />
    </div>
  );
}

export default App;
