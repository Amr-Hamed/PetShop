import { StyleSheet } from 'react-native'
import { Colors } from '../../Assets'

export default StyleSheet.create({
  headerContainerStyle: {
    position: 'absolute',
    zIndex: 2
  },
  imageContainer: {
    height: 400
  },
  image: {
    width: '100%',
    height: '100%'
  },
  content: {
    position: 'relative'
  },
  mainCard: {
    backgroundColor: Colors.lightGray,
    width: '70%',
    height: 80,
    marginTop: -80,
    alignSelf: 'center',
    borderRadius: 20,
    elevation: 2,
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    position: 'absolute',
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  favIconContainer: {
    right: 20,
    top: -20,
    elevation: 2,
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 4,
    shadowOpacity: 1
  },
  mainCardTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  mainCardSubtitle: {
    marginTop: 5,
    fontSize: 12
  },
  mainCardPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.mainYellow
  },
  detailsCard: {
    backgroundColor: Colors.lightGray,
    width: '100%',
    marginTop: -40,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    padding: 20
  },
  detailsCardMainSection: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    height: 70
  },
  detailsCardMainSubsection: {
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    padding: 10,
    width: '25%'
  },
  detailsCardDivider: {
    height: '50%'
  },
  detailsMainCardDivider: {
    marginTop: 10
  },
  detailsCardDescriptionTitle: {
    fontSize: 16,
    marginTop: 20,
    fontWeight: 'bold'
  },
  detailsCardDescription: {
    marginTop: 15,
    height: 150,
    lineHeight: 20
  },
  itemDetailsButtonStyle: {
    marginTop: 10
  }
})
