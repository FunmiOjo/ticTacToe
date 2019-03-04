import React from 'react'
import GameResult from './GameResult'
import ResetGameButton from './ResetGameButton'

const FinishedGame = () => {
  return (
    <div className="finished">
      <GameResult />
      <ResetGameButton />
    </div>
  )
}

export default FinishedGame
