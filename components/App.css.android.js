import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
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
  mangoImage: {
    height: '45%'
  },
  stats: {
    height: '35%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  deadStats: {
    height: '35%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#e74c3c'
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
