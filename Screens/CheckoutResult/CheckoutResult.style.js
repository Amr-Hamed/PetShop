import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from '../../Assets'

const { height, width } = Dimensions.get('window')
export default StyleSheet.create({
  container: {
    height,
    width,
    backgroundColor: Colors.mainYellow
  },
  logo: {
    height: height * 0.25,
    width: height * 0.25,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: height * 0.07
  },
  iconContainerOne: {
    height: height * 0.18,
    width: height * 0.18,
    borderRadius: height * 0.09,
    alignSelf: 'center',
    backgroundColor: Colors.colorWithOpacity(253, 253, 253, 0.1),
    marginTop: height * 0.03,
    justifyContent: 'center'
  },
  iconContainerTwo: {
    height: height * 0.15,
    width: height * 0.15,
    borderRadius: height * 0.075,
    alignSelf: 'center',
    backgroundColor: Colors.white,
    justifyContent: 'center'
  },
  iconContainerThree: {
    height: height * 0.12,
    width: height * 0.12,
    borderRadius: height * 0.06,
    alignSelf: 'center',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 4,
    shadowOpacity: 1
  },
  icon: {
    fontSize: height * 0.075,
    color: Colors.mainYellow
  },
  resultTitle: {
    fontSize: height * 0.03,
    fontWeight: 'bold',
    marginTop: height * 0.03,
    color: Colors.white,
    alignSelf: 'center',
    textAlign: 'center'
  },
  resultSubtitle: {
    fontSize: height * 0.02,
    width: '75%',
    marginTop: height * 0.015,
    fontWeight: 'bold',
    color: Colors.white,
    alignSelf: 'center',
    textAlign: 'center'
  },
  button: {
    backgroundColor: Colors.white,
    marginTop: height * 0.1,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 100
  },
  secondButton: {
    marginTop: height * 0.02
  },
  buttonText: {
    color: Colors.mainYellow,
    fontSize: height * 0.02
  }
})
