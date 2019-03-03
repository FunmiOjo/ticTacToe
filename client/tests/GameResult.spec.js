import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'
import { GameResult } from '../components/GameResult'

describe('GameResult component', () => {
  let wrapper
  let gameResult
  let winner
  beforeEach('set up wrapper', () => {
    gameResult = 'WON'
    winner = 1
    wrapper = shallow(<GameResult gameResult={gameResult} winner={winner} />)
  })

  it('displays the appropriate game result', () => {
    const message = wrapper.find('#resultMessage').text()

    expect(message).to.equal(`Player ${winner} won`)
  })
})
