import React from 'react';
import './index.css';

const Player = (props) => {
    console.log("Rendering PLAYER component");
    console.log(props);
    let { whichPlayer, propOne } = props;
    console.log("I got the frist prop!", propOne);
  return (
    <div className="player-container">
        <h3>Player {whichPlayer}</h3>
        <p>Wins: ?</p>
    </div>
  );
};

export default Player;
