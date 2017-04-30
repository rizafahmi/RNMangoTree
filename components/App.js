import React from 'react'
import {
  View,
  Text,
  Button,
  StatusBar
} from 'react-native'
import _ from 'lodash'

import styles from './App.css'
import StatsComponent from './StatComponent.js'
import DeadComponent from './DeadComponent.js'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      age: 0,
      height: 0,
      stopAge: _.random(5, 25),
      deadAge: _.random(25, 35),
      deadStatus: false
    }
  }

  simulateAge () {
    const { age, deadAge } = this.state
    if (age < deadAge) {
      this.setState({
        age: this.state.age + 1
      })
    } else {
      this.setState({
        deadStatus: true
      })
    }
  }
  simulateHeight () {
    const { age, height, stopAge } = this.state
    if (age < stopAge) {
      const randomHeight = _.random(1, 10)
      this.setState({
        height: height + randomHeight
      })
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='#29434e'
          barStyle='light-content'
   />
        <View style={styles.header}>
          <Text style={styles.headerText}>Mango Tree</Text>
        </View>
        { !this.state.deadStatus ? <StatsComponent {...this.state} /> : <DeadComponent /> }
        <View style={styles.buttons}>
          <Button
            title='Simulate'
            disabled={this.state.deadStatus}
            onPress={() => {
              this.simulateAge()
              this.simulateHeight()
            }}
            color='#546e7a'
      />
        </View>
      </View>
    )
  }
}

export default App
