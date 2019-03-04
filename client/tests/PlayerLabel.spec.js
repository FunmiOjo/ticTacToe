import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'
import PlayerLabel from '../components/PlayerLabel'

describe('PlayerLabel component', () => {
  let wrapper
  let activePlayer
  let ownPlayer
  beforeEach(() => {
    activePlayer = 1
    ownPlayer = 1
    wrapper = shallow(
      <PlayerLabel ownPlayer={ownPlayer} activePlayer={activePlayer} />
    )
  })

  it('should render an element with the className active when its own player is active', () => {
    expect(wrapper.find('.active')).to.have.lengthOf(1)
    expect(wrapper.find('.inactive')).to.have.lengthOf(0)
  })

  it('should render an element with the className active when its own player is not active', () => {
    activePlayer = 2
    ownPlayer = 1
    wrapper = shallow(
      <PlayerLabel ownPlayer={ownPlayer} activePlayer={activePlayer} />
    )
    expect(wrapper.find('.inactive')).to.have.lengthOf(1)
    expect(wrapper.find('.active')).to.have.lengthOf(0)
  })

  it('should display its own player', () => {
    expect(wrapper.childAt(0).text()).to.equal('Player 1 - X')
  })
})
