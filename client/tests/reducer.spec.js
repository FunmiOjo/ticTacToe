import { expect } from 'chai'
import reducer, { MARKED_CELL } from '../store/reducer'
import { createBoard } from '../utils'

describe('reducer', () => {
  const emptyBoard = [
    { position: 0, played: false, playerId: null },
    { position: 1, played: false, playerId: null },
    { position: 2, played: false, playerId: null },
    { position: 3, played: false, playerId: null },
    { position: 4, played: false, playerId: null },
    { position: 5, played: false, playerId: null },
    { position: 6, played: false, playerId: null },
    { position: 7, played: false, playerId: null },
    { position: 8, played: false, playerId: null },
  ]

  describe('board state', () => {
    it('should have an empty board as initial state', () => {
      expect(reducer().board).to.deep.equal(createBoard())
    })

    it('should handle MARKED_CELL action on initial state', () => {
      const initialState = { board: createBoard(), activePlayer: 1 }
      const action = { type: MARKED_CELL, position: 0 }
      const resultingBoard = [...emptyBoard]
      resultingBoard[0] = {
        position: 0,
        played: true,
        playerId: 1,
      }
      expect(reducer(initialState, action).board).to.deep.equal(resultingBoard)
    })

    it('should handle MARKED_CELL action on subsequent state', () => {
      const initialState = { board: createBoard(), activePlayer: 1 }
      const firstAction = { type: MARKED_CELL, position: 0 }
      const secondAction = { type: MARKED_CELL, position: 8 }
      const newState = reducer(initialState, firstAction)
      const resultingBoard = [...emptyBoard]
      resultingBoard[0] = {
        position: 0,
        played: true,
        playerId: 1,
      }
      resultingBoard[8] = {
        position: 8,
        played: true,
        playerId: 1,
      }
      expect(reducer(newState, secondAction).board).to.deep.equal(
        resultingBoard
      )
    })
  })
})
