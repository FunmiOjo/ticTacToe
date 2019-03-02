import { createBoard } from '../utils'

const initialState = {
  board: createBoard(),
  activePlayer: 1,
}

// actions
const MARKED_CELL = 'MARKED_CELL'
const SWITCHED_PLAYER = 'SWITCHED_PLAYER'

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
    default:
      return state
  }
}

export default reducer
