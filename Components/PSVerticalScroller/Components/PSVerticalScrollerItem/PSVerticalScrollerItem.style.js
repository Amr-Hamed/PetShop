import { StyleSheet } from 'react-native'
import { Colors } from '../../../../Assets'

export default StyleSheet.create({
  container: {
    height: 220,
    width: '48%',
    marginBottom: 25,
    marginRight: '4%',
    backgroundColor: Colors.white,
    elevation: 2,
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    borderRadius: 10,
    position: 'relative'
  },
  image: {
    resizeMode: 'contain',
    height: 150,
    width: '100%',
    borderRadius: 10
  },
  texContainer: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10
  },
  nameKey: {
    fontWeight: 'bold',
    fontSize: 16,
    width: '50%'
  },
  nameValue: {
    fontSize: 16
  },
  favButtonContainer: {
    bottom: -15,
    right: 15
  }
})
