import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'
import { Game } from '../components/Game'
import OngoingGame from '../components/OngoingGame'
import FinishedGame from '../components/FinishedGame'

describe('Game component', () => {
  let GameWrapper

  it('renders the FinishedGame component when game is finished', () => {
    GameWrapper = shallow(<Game gameStatus="TIED" />)
    expect(GameWrapper.find(FinishedGame)).to.have.lengthOf(1)
    expect(GameWrapper.find(OngoingGame)).to.have.lengthOf(0)
  })

  it('renders the OngoingGame component when the game is ongoing', () => {
    GameWrapper = shallow(<Game gameStatus="ONGOING" />)
    expect(GameWrapper.find(FinishedGame)).to.have.lengthOf(0)
    expect(GameWrapper.find(OngoingGame)).to.have.lengthOf(1)
  })
})
