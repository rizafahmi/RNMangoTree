import React from 'react'
import {
  View,
  Text,
  Button,
  StatusBar
} from 'react-native'

import styles from './App.css'

const NoOp = () => {}

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      age: 0
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
          <Text style={styles.statsText}>Age: </Text>
          <Text style={styles.statsText}>0</Text>
        </View>
        <View style={styles.buttons}>
          <Button
            title='Simulate'
            onPress={() => NoOp}
            color='#546e7a'
      />
        </View>
      </View>
    )
  }
}

export default App
