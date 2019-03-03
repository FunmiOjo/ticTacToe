import React, { Component } from 'react'
import { connect } from 'react-redux'
import OngoingGame from './OngoingGame'
import FinishedGame from './FinishedGame'

class Game extends Component {
  constructor() {
    super()
    this.state = {
      showGame: true,
    }
  }

  render() {
    if (this.props.gameStatus === 'ONGOING') {
      return <OngoingGame />
    } else {
      return <FinishedGame />
    }
  }
}

const mapState = state => {
  return {
    gameStatus: state.gameStatus,
  }
}

export default connect(mapState)(Game)
export { Game }
