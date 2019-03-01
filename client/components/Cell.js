import React, { Component } from 'react'
import { connect } from 'react-redux'
import { markedCell } from '../store/reducer'

class Cell extends Component {
  constructor() {
    super()
    this.state = {
      marker: '',
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    if (this.props.activePlayer === 1) {
      this.setState({ marker: 'X' })
    } else if (this.props.activePlayer === 2) {
      this.setState({ marker: 'O' })
    }
    this.props.markCell(this.props.position)
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
