import { StyleSheet } from 'react-native'
import { Colors } from '../../../../../../Assets'

export default StyleSheet.create({
    container: {
        width: 170,
        height: 230,
        marginRight: 15,
        position: 'relative',
        shadowColor: Colors.shadowColor,
        shadowOffset: {
            width: 0,
            height: 12
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
        position: 'absolute'
    },
    titleContainer: {
        width: '70%',
        marginLeft: 10,
        marginTop: 160
    },
    title: {
        color: Colors.white,
        fontSize: 18
    },
    subtitle: {
        color: Colors.white,
        fontSize: 14
    },
    favButtonContainerStyle: {
        bottom: -20,
        right: 20
    }
})