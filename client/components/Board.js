import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cell from './Cell'

class Board extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        {this.props.board.map(elem => (
          <Cell
            key={elem.position}
            position={elem.position}
            played={elem.played}
          />
        ))}
      </div>
    )
  }
}

const mapState = state => {
  return {
    board: state.board,
  }
}

export default connect(mapState)(Board)
export { Board }
