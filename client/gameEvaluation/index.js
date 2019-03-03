export const cellNotPlayed = cellData => {
  return cellData.played === false
}

export const cellPlayedByOpponent = (cell, activePlayer) => {
  return cell.playerId !== activePlayer
}

export const rowWin = (board, player) => {
  let win
  for (let i = 0; i < board.length; i++) {
    /* the board is represented by a one-dimensional
    array so the win variable is reset after three
    cells have been evaluated
    */
    if (i % 3 === 0) {
      win = true
    }

    if (cellNotPlayed(board[i])) {
      win = false
    } else if (cellPlayedByOpponent(board[i], player)) {
      win = false
    }

    if (i % 3 === 2 && win) {
      return true
    }
  }
  return false
}

export const columnWin = (board, player) => {
  let win
  for (let i = 0; i < 3; i++) {
    win = true
    for (let j = i; j < i + 7; j += 3) {
      if (cellNotPlayed(board[j]) || cellPlayedByOpponent(board[j], player)) {
        win = false
      }
    }
    if (win) {
      return true
    }
  }
  return false
}

const updateLeftDiagonalOffset = offset => {
  return ++offset
}

const updateRightDiagonalOffset = offset => {
  return --offset
}

const leftDiagonalInitialIndex = 0
const rightDiagonalInitialIndex = 2

export const diagonalWin = (board, player, initialIndex, updateOffset) => {
  let win = true
  for (let i = initialIndex, offset = 0; i < board.length; i += 3) {
    if (
      cellNotPlayed(board[i + offset]) ||
      cellPlayedByOpponent(board[i + offset], player)
    ) {
      win = false
    }
    offset = updateOffset(offset)
  }
  if (win) {
    return true
  }
  return false
}

export const evaluateDiagonalWin = (board, player) => {
  return (
    diagonalWin(
      board,
      player,
      leftDiagonalInitialIndex,
      updateLeftDiagonalOffset
    ) ||
    diagonalWin(
      board,
      player,
      rightDiagonalInitialIndex,
      updateRightDiagonalOffset
    )
  )
}

export const evaluateWin = (board, player) => {
  return (
    rowWin(board, player) ||
    columnWin(board, player) ||
    evaluateDiagonalWin(board, player)
  )
}
export const allCellsPlayed = board => {
  return (
    board.filter(cell => {
      return cell.played === true
    }).length === 9
  )
}

export const evaluateTie = board => {
  return (
    allCellsPlayed(board) && !evaluateWin(board, 1) && !evaluateWin(board, 2)
  )
}
