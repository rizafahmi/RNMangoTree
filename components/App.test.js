import React from 'react'
import { shallow } from 'enzyme'

import App from './App.js'

describe('Renders <App />', () => {
  let app
  beforeEach(() => {
    app = shallow(<App />)
  })
  test('<App /> should render properly', () => {
    expect(app).toBeDefined()
    expect(app).toHaveLength(1)
  })
  describe('<App /> should have header text, stats text and simulate button', () => {
    test('should render header text', () => {
      expect(app.find('Text')).toHaveLength(1)
      expect(app.find('Text').props().children).toEqual('Mango Tree')
    })
    test('should render stats text')
    test('should render simulate button')
  })
})
