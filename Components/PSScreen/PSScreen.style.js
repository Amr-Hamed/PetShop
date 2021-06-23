import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from '../../Assets'

const screenWidth = Dimensions.get('window').width
export default StyleSheet.create({
    container: {
        width: screenWidth,
        backgroundColor: Colors.lightGray,
        flex: 1,
        position: 'relative'
    },
    scrollView: {
    }
})