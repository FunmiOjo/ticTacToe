import React, { Component } from 'react'
import { connect } from 'react-redux'
import { markedCell, switchedPlayer } from '../store/reducer'
import { cellNotPlayed } from '../gameEvaluation'

class Cell extends Component {
  constructor() {
    super()
    this.state = {
      marker: '-',
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    if (this.props.played === false) {
      if (this.props.activePlayer === 1) {
        this.setState({ marker: 'X' })
      } else if (this.props.activePlayer === 2) {
        this.setState({ marker: 'O' })
      }
      this.props.markCell(this.props.position)
      this.props.evaluateBoard()
      this.props.switchPlayer()
    }
  }

  render() {
    return (
      <div onClick={this.handleClick} className="cell">
        {this.state.marker}
      </div>
    )
  }
}

const mapState = state => {
  return {
    activePlayer: state.activePlayer,
  }
}

const mapDispatch = dispatch => {
  return {
    markCell: position => dispatch(markedCell(position)),
  }
}

export default connect(
  mapState,
  mapDispatch
)(Cell)

export { Cell }
