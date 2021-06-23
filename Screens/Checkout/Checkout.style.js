import { StyleSheet } from 'react-native'
import { Colors } from '../../Assets'

export default StyleSheet.create({
  content: {
    padding: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  itemContainer: {
    padding: 10,
    backgroundColor: Colors.white,
    elevation: 2,
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    marginTop: 15,
    borderRadius: 15
  },
  sectionsDivider: _marginTop => ({
    marginTop: _marginTop
  }),
  itemTitleAndIconContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
  },
  subtitleContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  itemTitle: {
    fontSize: 13,
    fontWeight: 'bold'
  },
  itemIcon: {
    color: Colors.mainYellow
  },
  itemSubtitle: {
    color: Colors.darkestGray
  },
  checkoutButton: {
      marginTop: 60
  }
})
