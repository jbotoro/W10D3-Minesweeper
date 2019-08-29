import * as Minesweeper from "../minesweeper.js";
import React from 'react';

export default class Tile extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick (e) {
    
    let tile = this.props.tile;
    let that = this;
    return e => {
      let flagging = e.altKey;
      if (flagging) {
        that.props.updateGame(tile, flagging);
      } else {
        that.props.updateGame(tile, flagging);
      }
    }
  }

  render() {
    
    let currentTile = this.props.tile;
    
    if (currentTile && currentTile.explored) {
      let adjBombCount = currentTile.adjacentBombCount();
      if (currentTile.bombed) {
        return <div onClick={this.handleClick()} className="tile bombed"> <div> 💣 </div> </div> 
      }
      return <div onClick={this.handleClick()} className="tile revealed" > <div> {adjBombCount >= 1 ? adjBombCount : ""} </div> </div>
      } else {
        if (currentTile.flagged) {
          return <div onClick={this.handleClick()} className="tile flagged" > <div> 🚩</div> </div> 
        } else {
          return <div onClick={this.handleClick()} className="tile" text=''>  </div>
        }
      }
    }
  }