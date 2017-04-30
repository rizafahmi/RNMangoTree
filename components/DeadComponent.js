import React from 'react'
import {
  View,
  Text
} from 'react-native'

import styles from './App.css'

const DeadComponent = (props) => {
  return (
    <View style={styles.deadStats}>
      <Text style={styles.statsText}>Sorry, your tree was dead! My condolences.</Text>
    </View>
  )
}

export default DeadComponent
