import { expect } from 'chai'
import { shallow } from 'enzyme'
import { sinon } from 'sinon'
import React from 'react'
import { Board } from '../components/Board'
import { createBoard } from '../utils'

describe('Board component', () => {
  let wrapper
  let divs
  beforeEach('set up wrapper', () => {
    const mockEmptyBoardData = createBoard()
    wrapper = shallow(<Board board={mockEmptyBoardData} />)
    divs = wrapper.find('div').children()
  })

  it('displays nine cells', () => {
    expect(divs).to.have.lengthOf(9)
  })
})
