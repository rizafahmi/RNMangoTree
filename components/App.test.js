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
      expect(texts.nodes[2].props.children).toEqual(0)
      expect(texts.nodes[3].props.children).toEqual('Height: ')
      expect(texts.nodes[4].props.children).toEqual(0)
    })
    test('should render simulate button', () => {
      expect(app.find('Button')).toHaveLength(1)
      expect(app.find('Button').props().title).toEqual('Simulate')
    })
  })
})

describe('State of the App', () => {
  let app, appInstance, texts
  beforeEach(() => {
    app = shallow(<App />)
    appInstance = app.instance()
    texts = app.find('Text')
  })

  test('initial state of age should be 0', () => {
    expect(appInstance.state.age).toEqual(0)
  })

  test.skip('age state is 1 when simulateAge triggered', (done) => {
    expect(appInstance.state.age).toEqual(0)
    app.instance().simulateAge()
    // texts.update()
    expect(texts.nodes[2].props.children).toEqual(1)
    done()
  })
})

test.skip('Simulate click for button', (done) => {
  const app = shallow(<App />)
  const button = app.find('Button')
  expect(app.instance().state.age).toEqual(0)
  button.simulate('click')
  expect(app.state().age).toEqual(1)
  done()
})
