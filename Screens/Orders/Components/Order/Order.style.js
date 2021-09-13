import { StyleSheet } from 'react-native'
import { Colors } from '../../../../Assets'

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.white,
    elevation: 2,
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    marginBottom: 15,
    borderRadius: 10,
    padding: 15
  },
  secionContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemKey: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  itemValue: {
    fontSize: 16,
  },
  showMoreIcon: {
      fontSize: 25,
      alignSelf: 'center',
      marginTop: 15,
      color: Colors.mainYellow
  },
  itemsContainer: {
    marginTop: 10
  }
})
