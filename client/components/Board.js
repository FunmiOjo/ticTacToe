import React, { Component } from 'react'
import { connect } from 'react-redux'
import { evaluateBoard } from '../gameEvaluation'
import { evaluatedBoard, switchedPlayer } from '../store/reducer'
import Cell from './Cell'

class Board extends Component {
  constructor() {
    super()
    this.handleTurnChange = this.handleTurnChange.bind(this)
  }

  handleTurnChange() {
    if (this.props.gameStatus === 'ONGOING') {
      this.props.switchPlayer()
    }
  }

  render() {
    return (
      <div>
        {this.props.board.map(elem => (
          <Cell
            key={elem.position}
            position={elem.position}
            played={elem.played}
            evaluateBoard={() =>
              this.props.evaluateBoard(
                this.props.board,
                this.props.activePlayer
              )
            }
            switchPlayer={this.handleTurnChange}
          />
        ))}
      </div>
    )
  }
}

const mapState = state => {
  return {
    board: state.board,
    activePlayer: state.activePlayer,
    gameStatus: state.gameStatus,
  }
}

const mapDispatch = dispatch => {
  return {
    evaluateBoard: (board, activePlayer) => {
      dispatch(evaluatedBoard(evaluateBoard(board, activePlayer)))
    },
    switchPlayer: () => dispatch(switchedPlayer()),
  }
}

export default connect(
  mapState,
  mapDispatch
)(Board)
export { Board }
