import React from 'react'
import Title from './Title'
import PlayerLabelSection from './PlayerLabelSection'
import Board from './Board'

const OngoingGame = () => {
  return (
    <div className="ongoing">
      <Title />
      <PlayerLabelSection />
      <Board />
    </div>
  )
}

export default OngoingGame
