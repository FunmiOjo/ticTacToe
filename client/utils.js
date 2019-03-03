export const createBoard = () => {
  const board = Array(9).fill(0)
  return board.map((elem, index) => {
    const cellData = {}
    cellData.position = index
    cellData.played = false
    cellData.playerId = null
    return cellData
  })
}

export const createTiedBoard = board => {
  let player1
  let player2
  for (let i = 0; i < board.length; i++) {
    player1 = 1
    player2 = 2

    board[i].played = true
    if (i >= 3 && i < 6) {
      player1 = 2
      player2 = 1
    }
    if (i % 3 === 0) {
      board[i].playerId = player1
    } else {
      board[i].playerId = player2
    }
  }
  return board
}
