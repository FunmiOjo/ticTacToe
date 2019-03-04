import React, { Component } from 'react'
import PlayerLabel from './PlayerLabel'
import { connect } from 'react-redux'

class PlayerLabelSection extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="playerlabel-section">
        <PlayerLabel ownPlayer={1} activePlayer={this.props.activePlayer} />
        <PlayerLabel ownPlayer={2} activePlayer={this.props.activePlayer} />
      </div>
    )
  }
}

const mapState = state => {
  return {
    activePlayer: state.activePlayer,
  }
}

export default connect(mapState)(PlayerLabelSection)
