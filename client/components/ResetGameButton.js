import React, { Component } from 'react'
import { connect } from 'react-redux'
import { resetGame } from '../store/reducer'

class ResetGameButton extends Component {
  constructor() {
    super()
  }

  render() {
    return <button onClick={this.props.resetGame}>Reset Game</button>
  }
}

const mapDispatch = dispatch => {
  return {
    resetGame: () => dispatch(resetGame()),
  }
}

export default connect(
  null,
  mapDispatch
)(ResetGameButton)
