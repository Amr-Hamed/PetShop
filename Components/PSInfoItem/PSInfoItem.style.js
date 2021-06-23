import { StyleSheet } from 'react-native'
import { Colors } from '../../Assets'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: _fontSize => ({
    fontSize: _fontSize
  }),
  subtitle: _fontSize => ({
    fontSize: _fontSize
  })
})
