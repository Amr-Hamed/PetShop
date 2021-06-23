import { StyleSheet } from 'react-native'
import { Colors } from '../../Assets'

export default StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 10
  },
  itemsNumberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30
  },
  itemsNumber: {
    fontSize: 16
  },
  deleteItemsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  deleteItemsTitle: {
    marginLeft: 5
  },
  sectionsDivider: _marginTop => ({
    marginTop: _marginTop
  }),
  noItemsText: {
    alignSelf: 'center',
    marginTop: 50,
    fontSize: 16
  },
  noItemsImage: {
    marginTop: 50,
    alignSelf: 'center',
    height: 120,
    width: 120
  },
  summaryTitle: {
    fontSize: 20,
    marginTop: 15,
    fontWeight: 'bold'
  },
  cartButton: {
    marginTop: 60
  }
})
