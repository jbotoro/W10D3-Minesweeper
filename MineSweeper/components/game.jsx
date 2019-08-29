import * as Minesweeper from "../minesweeper.js";
import React from 'react';
import Board from './board';

export default class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board:  new Minesweeper.Board(9, 10),

    };

    this.updateGame = this.updateGame.bind(this);
  }

  render () {

    if (this.state.board.won()) {
      alert("U WON");
      this.setState({ board: new Minesweeper.Board(9, 10) });
    } else if (this.state.board.lost()) {
      alert("U BAD");
      this.setState({ board: new Minesweeper.Board(9, 10) });
    }
    return (
      
      <div>
        <Board board = {this.state.board} updateGame = {this.updateGame} />
        
      </div>
      // this.state.board
      // this.updateGame
    );

  }


  updateGame (tile, flagging ) {
  
    if (flagging) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }

    this.setState( { board: this.state.board } )
  }

}

