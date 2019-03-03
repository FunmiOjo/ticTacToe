import React, { Component } from 'react'
import { connect } from 'react-redux'

class GameResult extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <h2 id="resultMessage">
        Player {this.props.winner} {this.props.gameResult.toLowerCase()}
      </h2>
    )
  }
}

const mapState = state => {
  return {
    winner: state.winningPlayer,
    gameResult: state.gameStatus,
  }
}

export default connect(mapState)(GameResult)
export { GameResult }
