import { StyleSheet } from 'react-native'
import { Colors } from '../../../../Assets'

export default StyleSheet.create({
  container: {
    height: 300,
    width: '48%',
    marginBottom: 10,
    marginRight: '4%',
    backgroundColor: Colors.white,
    elevation: 2,
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 4,
    shadowOpacity: 1

  }
})
