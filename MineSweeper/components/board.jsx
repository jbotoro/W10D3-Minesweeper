import * as Minesweeper from "../minesweeper.js";
import React from 'react';
import Tile from './tile';


export default class Board extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    // return "Board is here";
    // <li key={tileIdx} pos={[rowIdx, tileIdx]} className="tile"></li>
    return (
      <div className="board">
        {this.props.board && this.props.board.grid.map( (row, rowIdx) => {
          return <div className="row" key = {rowIdx}>
            {row.map( (tile, tileIdx) => {
               return  <Tile tile={tile} updateGame={this.props.updateGame} key={[rowIdx, tileIdx]}/>
               })} 
          </div>
        })}
      </div>
    )
  }
}