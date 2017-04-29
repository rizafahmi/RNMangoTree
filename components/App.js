import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform
} from 'react-native'

const NoOp = () => {}

const App = (props) => {
  return (
    <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    ...Platform.select({
      ios: {
        marginTop: 22
      }
    })
  }
})
export default App
