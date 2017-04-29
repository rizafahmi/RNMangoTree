import React from 'react'
import { shallow } from 'enzyme'

import App from './App.js'

describe('Renders <App />', () => {
  test('<App /> should render properly', () => {
    const app = shallow(<App />)
    expect(app).toBeDefined()
    expect(app).toHaveLength(1)
  })
})
