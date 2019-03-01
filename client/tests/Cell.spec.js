import { expect } from 'chai'
import { shallow } from 'enzyme'
import { sinon } from 'sinon'
import React from 'react'
import { Cell } from '../components/Cell'

describe('Cell component', () => {
  let wrapper
  beforeEach('set up wrapper', () => {
    wrapper = shallow(<Cell />)
  })

  it('displays a game token', () => {
    const text = wrapper.text()
    expect(text).to.be.oneOf(['', 'X', 'O'])
  })
})
