import React from 'react'

const PlayerLabel = props => {
  const className =
    props.ownPlayer === props.activePlayer ? 'active' : 'inactive'
  const innerText = `Player ${props.ownPlayer} - ${
    props.ownPlayer === 1 ? 'X' : 'O'
  }`
  return <div className={className}>{innerText}</div>
}

export default PlayerLabel
