import { StyleSheet } from 'react-native'
import { Colors } from '../../Assets'

export default StyleSheet.create({
  container: {
    height: 100,
    marginTop: 15,
    backgroundColor: Colors.lightGray,
    borderRadius: 10,
    elevation: 2,
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imageContainer: {
    height: 100,
    width: 100
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
    resizeMode: 'contain'
  },
  content: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between'
  },
  contentTitleAndDeleteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 12
  },
  counterAndPriceContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  price: {
    fontSize: 18
  }
})
