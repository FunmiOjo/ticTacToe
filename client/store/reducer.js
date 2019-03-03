import { createBoard } from '../utils'
import { evaluateBoard } from '../gameEvaluation'

const ONGOING = 'ONGOING'
const WON = 'WON'
const TIED = 'TIED'

const initialState = {
  board: createBoard(),
  activePlayer: 1,
  gameStatus: ONGOING,
}

// actions
export const MARKED_CELL = 'MARKED_CELL'
export const SWITCHED_PLAYER = 'SWITCHED_PLAYER'
export const EVALUATED_BOARD = 'EVALUATED_BOARD'

export const markedCell = position => {
  return {
    type: MARKED_CELL,
    position,
  }
}

export const switchedPlayer = () => {
  return {
    type: SWITCHED_PLAYER,
  }
}

export const evaluatedBoard = gameStatus => {
  return {
    type: EVALUATED_BOARD,
    gameStatus,
  }
}

export const getBoardEvaluation = (board, activePlayer) => {
  return dispatch => {
    dispatch(evaluatedBoard(evaluateBoard(board, activePlayer)))
  }
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case MARKED_CELL:
      return {
        ...state,
        board: state.board.map(cell => {
          if (cell.position === action.position) {
            cell.played = true
            cell.playerId = state.activePlayer
          }
          return cell
        }),
      }
    case SWITCHED_PLAYER:
      return {
        ...state,
        activePlayer: state.activePlayer === 1 ? 2 : 1,
      }
    case EVALUATED_BOARD:
      return {
        ...state,
        gameStatus: action.gameStatus,
      }
    default:
      return state
  }
}

export default reducer
