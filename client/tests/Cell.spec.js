import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import { Cell } from '../components/Cell'

describe('Cell component', () => {
  let wrapper
  const mockMarkCell = sinon.spy()
  const mockSwitchPlayer = sinon.spy()
  beforeEach('set up wrapper', () => {
    wrapper = shallow(
      <Cell markCell={mockMarkCell} switchPlayer={mockSwitchPlayer} />
    )
  })

  it('displays a game token', () => {
    const text = wrapper.text()
    expect(text).to.be.oneOf(['-', 'X', 'O'])
  })

  it('handles clicks properly', () => {
    const div = wrapper.find('div')
    const wrapperInstance = wrapper.instance()
    wrapperInstance.handleClick = sinon.spy()
    div.simulate('click')
    expect(mockMarkCell.called).to.equal(true)
    expect(mockSwitchPlayer.called).to.equal(true)
  })
})
