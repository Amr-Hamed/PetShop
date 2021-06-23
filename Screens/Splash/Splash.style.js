import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from '../../Assets'

const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    splashContainer: {
      height,
      width,
      backgroundColor: Colors.mainYellow,
      justifyContent: 'center',
      alignItems: 'center'
    },
    logoContainer: {
        backgroundColor: Colors.lightGray,
        height: height * 0.2,
        width: height * 0.2,
        borderRadius: height * 0.1
    },
    logo: {
        height: height * 0.2,
        width: height * 0.2,
        resizeMode: 'contain',
        borderRadius: height * 0.1
    }
})