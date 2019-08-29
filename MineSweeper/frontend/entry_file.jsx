import React from 'react';
import ReactDOM from 'react-dom';
import Game from '../components/game.jsx';
// import Tile from '../components/tile.jsx';
// import Board from '../components/board.jsx';

function Root() {
  return (
    <div>
      <Game class="game"/>
      {/* <Tile /> */}
      {/* <Board /> */}
    </div>
  )
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root)
})