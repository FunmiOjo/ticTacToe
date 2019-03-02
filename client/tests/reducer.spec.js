import { expect } from 'chai'
import { Reducer } from 'redux-testkit'
import reducerToTest, { MARKED_CELL } from '../store/reducer'
import { createBoard } from '../utils'

describe('reducer', () => {
  describe('board state', () => {
    it('should have an empty board as initial state', () => {
      expect(reducerToTest().board).to.deep.equal(createBoard())
    })
    it('should handle MARKED_CELL action on initial state', () => {
      const action = { type: MARKED_CELL, position: 0 }
      const result = {}
      console.log('something')
      console.log('printing here')
      const toReturnState = Reducer(reducerToTest)
        .expect(action)
        .toReturnState()
      console.log(toReturnState.toString())
    })
  })
})
