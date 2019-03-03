import { expect } from 'chai'
import { createBoard, createTiedBoard } from '../utils'
import {
  cellNotPlayed,
  cellPlayedByOpponent,
  columnWin,
  evaluateBoard,
  evaluateDiagonalWin,
  evaluateTie,
  evaluateWin,
  rowWin,
} from '../gameEvaluation'

describe('game evaluation', () => {
  const boardWithRowWin = createBoard()
  const boardWithoutRowWin1 = createBoard()
  const boardWithoutRowWin2 = createBoard()
  const boardWithColumnWin = createBoard()
  const boardWithoutColumnWin1 = createBoard()
  const boardWithoutColumnWin2 = createBoard()
  const boardWithDiagonalWin1 = createBoard()
  const boardWithDiagonalWin2 = createBoard()
  const tiedBoard = createTiedBoard(createBoard())

  describe('cellNotPlayed', () => {
    it('correctly evaluates whether a cell has been played', () => {
      const unplayedCell = createBoard()[0]
      expect(cellNotPlayed(unplayedCell)).to.equal(true)
      unplayedCell.played = true
      expect(cellNotPlayed(unplayedCell)).to.equal(false)
    })
  })

  describe('cellPlayedByOpponent', () => {
    it(`correctly evaluates whether a cell has been played by a given player's opponent`, () => {
      const board = createBoard()
      board[0].played = true
      board[0].playerId = 1
      board[1].played = true
      board[1].playerId = 2
      expect(cellPlayedByOpponent(board[0], 1)).to.equal(false)
      expect(cellPlayedByOpponent(board[1], 1)).to.equal(true)
    })
  })

  describe('rowWin', () => {
    it('it correctly evaluates whether a player has a winning row', () => {
      boardWithRowWin[3].played = true
      boardWithRowWin[3].playerId = 1
      boardWithRowWin[4].played = true
      boardWithRowWin[4].playerId = 1
      boardWithRowWin[5].played = true
      boardWithRowWin[5].playerId = 1

      boardWithoutRowWin1[3].played = true
      boardWithoutRowWin1[3].playerId = 1
      boardWithoutRowWin1[4].played = true
      boardWithoutRowWin1[4].playerId = 2
      boardWithoutRowWin1[5].played = true
      boardWithoutRowWin1[5].playerId = 1

      boardWithoutRowWin2[3].played = false
      boardWithoutRowWin2[3].playerId = null
      boardWithoutRowWin2[4].played = true
      boardWithoutRowWin2[4].playerId = 2
      boardWithoutRowWin2[5].played = true
      boardWithoutRowWin2[5].playerId = 2
      expect(rowWin(boardWithRowWin, 1)).to.equal(true)
      expect(rowWin(boardWithRowWin, 2)).to.equal(false)
      expect(rowWin(boardWithoutRowWin1, 1)).to.equal(false)
      expect(rowWin(boardWithoutRowWin2, 1)).to.equal(false)
    })
  })

  describe('columnWin', () => {
    it('correctly evaluates whether a player has a winning column', () => {
      boardWithColumnWin[1].played = true
      boardWithColumnWin[1].playerId = 1
      boardWithColumnWin[4].played = true
      boardWithColumnWin[4].playerId = 1
      boardWithColumnWin[7].played = true
      boardWithColumnWin[7].playerId = 1

      boardWithoutColumnWin1[1].played = true
      boardWithoutColumnWin1[1].playerId = 1
      boardWithoutColumnWin1[4].played = true
      boardWithoutColumnWin1[4].playerId = 2
      boardWithoutColumnWin1[7].played = true
      boardWithoutColumnWin1[7].playerId = 1

      boardWithoutColumnWin2[1].played = false
      boardWithoutColumnWin2[1].playerId = null
      boardWithoutColumnWin2[4].played = true
      boardWithoutColumnWin2[4].playerId = 2
      boardWithoutColumnWin2[7].played = true
      boardWithoutColumnWin2[7].playerId = 2
      expect(columnWin(boardWithColumnWin, 1)).to.equal(true)
      expect(columnWin(boardWithColumnWin, 2)).to.equal(false)
      expect(columnWin(boardWithoutColumnWin1, 1)).to.equal(false)
      expect(columnWin(boardWithoutColumnWin2, 1)).to.equal(false)
    })
  })

  describe('diagonalWin', () => {
    it('correctly evaluates whether a player has a winning diagonal', () => {
      boardWithDiagonalWin1[0].played = true
      boardWithDiagonalWin1[0].playerId = 1
      boardWithDiagonalWin1[4].played = true
      boardWithDiagonalWin1[4].playerId = 1
      boardWithDiagonalWin1[8].played = true
      boardWithDiagonalWin1[8].playerId = 1

      boardWithDiagonalWin2[2].played = true
      boardWithDiagonalWin2[2].playerId = 1
      boardWithDiagonalWin2[4].played = true
      boardWithDiagonalWin2[4].playerId = 1
      boardWithDiagonalWin2[6].played = true
      boardWithDiagonalWin2[6].playerId = 1
      expect(evaluateDiagonalWin(boardWithDiagonalWin1, 1)).to.equal(true)
      expect(evaluateDiagonalWin(boardWithDiagonalWin2, 1)).to.equal(true)
      expect(evaluateDiagonalWin(boardWithDiagonalWin1, 2)).to.equal(false)
      expect(evaluateDiagonalWin(boardWithDiagonalWin2, 2)).to.equal(false)
    })
  })

  describe('evaluateWin', () => {
    it('correctly evaluates whether a player has won', () => {
      expect(evaluateWin(boardWithColumnWin, 1)).to.equal(true)
      expect(evaluateWin(boardWithRowWin, 1)).to.equal(true)
      expect(evaluateWin(boardWithDiagonalWin1, 1)).to.equal(true)
      expect(evaluateWin(boardWithDiagonalWin2, 1)).to.equal(true)
      expect(evaluateWin(boardWithoutColumnWin1, 1)).to.equal(false)
      expect(evaluateWin(boardWithDiagonalWin1, 2)).to.equal(false)
    })
  })

  describe('evaluateTie', () => {
    it('correctly evaluates whether the board is tied', () => {
      expect(evaluateTie(tiedBoard)).to.equal(true)
    })
  })

  describe('evaluateBoard', () => {
    it('correctly evaluates the game status', () => {
      expect(evaluateBoard(boardWithDiagonalWin1, 1)).to.equal('WON')
      expect(evaluateBoard(tiedBoard, 1)).to.equal('TIED')
      expect(evaluateBoard(boardWithoutColumnWin1, 1)).to.equal('ONGOING')
    })
  })
})
