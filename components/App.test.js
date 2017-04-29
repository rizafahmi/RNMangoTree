import React from 'react'
import { shallow } from 'enzyme'

import App from './App.js'

describe('Renders <App />', () => {
  let app, texts
  beforeEach(() => {
    app = shallow(<App />)
    texts = app.find('Text')
  })
  test('<App /> should render properly', () => {
    expect(app).toBeDefined()
    expect(app).toHaveLength(1)
  })
  describe('<App /> should have header text, stats text and simulate button', () => {
    test('should render header text', () => {
      expect(texts.nodes[0].props.children).toEqual('Mango Tree')
    })
    test('should render stats text', () => {
      expect(texts.nodes[1].props.children).toEqual('Age: ')
      expect(texts.nodes[2].props.children).toEqual('0')
    })
    test('should render simulate button', () => {
      expect(app.find('Button')).toHaveLength(1)
      expect(app.find('Button').props().title).toEqual('Simulate')
    })
  })
})

describe('State of the App', () => {
  let app, appInstance
  beforeEach(() => {
    app = shallow(<App />)
    appInstance = app.instance()
  })
  test('initial state of age should be 0', () => {
    expect(appInstance.state.age).toEqual(0)
  })
  test('age state is 1 when simulateAge triggered', () => {
    app.instance().simulateAge()
    expect(appInstance.state.age).toEqual(1)
  })
})
