import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import { Board } from '../components/Board'
import { createBoard } from '../utils'

describe('Board component', () => {
  let wrapper
  let divs
  let mockEvaluateBoard
  let individualDiv
  beforeEach('set up wrapper', () => {
    const mockEmptyBoardData = createBoard()
    mockEvaluateBoard = sinon.spy()
    wrapper = shallow(
      <Board board={mockEmptyBoardData} evaluateBoard={mockEvaluateBoard} />
    )
    divs = wrapper.find('div').children()
  })

  it('displays nine cells', () => {
    expect(divs).to.have.lengthOf(9)
  })
})
