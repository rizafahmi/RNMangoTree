import React from 'react'
import {
  View,
  Text,
  Button
} from 'react-native'

const NoOp = () => {}

const App = (props) => {
  return (
    <View>
      <Text>Mango Tree</Text>
      <View>
        <Text>Some stats...</Text>
      </View>
      <Button
        title='Simulate'
        onPress={() => NoOp}
      />
    </View>
  )
}

export default App
