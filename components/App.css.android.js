import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E1E2E1'
  },
  header: {
    backgroundColor: '#546e7a',
    height: '10%',
    width: '100%',
    justifyContent: 'center'
  },
  headerText: {
    color: '#E9ECEE',
    fontSize: 20,
    paddingLeft: 22
  },
  stats: {
    height: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  statsText: {
    fontSize: 36,
    fontWeight: 'bold'
  },
  buttons: {
    height: '10%'

  }
})

export default styles
