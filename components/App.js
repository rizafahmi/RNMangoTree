import React from 'react'
import {
  View,
  Text,
  Button,
  StatusBar
} from 'react-native'
import _ from 'lodash'

import styles from './App.css'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      age: 0,
      height: 0,
      stopAge: _.random(5, 35)
    }
  }

  simulateAge () {
    this.setState({
      age: this.state.age + 1
    })
  }
  simulateHeight () {
    const { age, height, stopAge } = this.state
    if (age <= stopAge) {
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
        <View style={styles.stats}>
          <Text style={styles.statsText}>Age: { this.state.age } ( {this.state.stopAge} )</Text>
          <Text style={styles.statsText}>Height: { this.state.height }</Text>
        </View>
        <View style={styles.buttons}>
          <Button
            title='Simulate'
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
