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
