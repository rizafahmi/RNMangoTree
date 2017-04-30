import React from 'react'
import {
  View,
  Text
} from 'react-native'

import styles from './App.css'

const StatsComponent = ({age, stopAge, deadAge, height}) => {
  return (
    <View style={styles.stats}>
      <Text style={styles.statsText}>Age: { age } ( { stopAge } ) ( { deadAge } )</Text>
      <Text style={styles.statsText}>Height: { height }</Text>
    </View>
  )
}

export default StatsComponent
