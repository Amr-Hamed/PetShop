import { StyleSheet } from 'react-native'
import { Colors } from '../../../../Assets'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    elevation: 2,
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  image: {
      resizeMode: 'cover',
      height: '100%',
      width: 100,
      borderRadius: 10
  },
  content: {
      flex: 1,
      marginLeft: 5,
      justifyContent: 'center',
      padding: 5
  },
  contentRow: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center'
  },
  sectionContainer: {
    flexDirection: 'row'
  },
  sectionKey: {
      fontWeight: 'bold',
      fontSize: 14,
  }
})
