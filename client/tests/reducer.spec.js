import { expect } from 'chai'
import reducer, {
  MARKED_CELL,
  RESET_GAME,
  SWITCHED_PLAYER,
} from '../store/reducer'
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

    it('should handle EVALUATED_BOARD action', () => {
      const initialState = {
        gameStatus: 'ONGOING',
        board: createBoard(),
        activePlayer: 1,
      }
      const action = { type: 'EVALUATED_BOARD', gameStatus: 'WON' }
      expect(reducer(initialState, action).gameStatus).to.equal('WON')
    })

    it('should handle RESET_GAME action', () => {
      const initialState = {
        board: createBoard(),
        activePlayer: 1,
        winningPlayer: 0,
        gameStatus: 'ONGOING',
      }

      const resultState = {
        board: createBoard(),
        activePlayer: 1,
        winningPlayer: 0,
        gameStatus: 'ONGOING',
      }

      let newState = reducer(
        { ...initialState },
        { type: MARKED_CELL, position: 0 }
      )
      newState = reducer(newState, { type: MARKED_CELL, position: 8 })
      newState = reducer(newState, {
        type: 'EVALUATED_BOARD',
        gameStatus: 'WON',
      })

      expect(reducer(newState, { type: RESET_GAME })).to.deep.equal(resultState)
    })
  })

  describe('active player state', () => {
    it('should handle SWITCHED_PLAYER action', () => {
      const action = { type: SWITCHED_PLAYER }
      const initialState = { board: createBoard(), activePlayer: 1 }
      const secondState = { board: createBoard(), activePlayer: 2 }
      const thirdState = { board: createBoard(), activePlayer: 1 }
      expect(reducer(initialState, action)).to.deep.equal(secondState)
      expect(reducer(secondState, action)).to.deep.equal(thirdState)
    })
  })
}) // describe reducer
