import { createBoard } from '../utils'

const initialState = {
  board: createBoard(),
  activePlayer: 1,
}

// actions
const MARKED_CELL = 'MARKED_CELL'

export const markedCell = position => {
  return {
    type: MARKED_CELL,
    position,
  }
}

const reducer = (state = initialState, action) => {
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
    default:
      return state
  }
}

export default reducer
