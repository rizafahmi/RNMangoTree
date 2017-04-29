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
      expect(app.find('Text').nodes[0].props.children).toEqual('Mango Tree')
    })
    test('should render stats text', () => {
      expect(app.find('Text').nodes[1].props.children).toEqual('Some stats...')
    })
    test('should render simulate button')
  })
})
