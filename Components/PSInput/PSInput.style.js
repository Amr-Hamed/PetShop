import { StyleSheet } from 'react-native'
import { Colors } from '../../Assets'

export default StyleSheet.create({
    container: {
        borderBottomColor: Colors.darkGray,
        borderBottomWidth: 2,
        height: 40,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center'
    },
    input: {
        marginHorizontal: 10,
        textAlign: 'center',
        fontSize: 16,
        color: Colors.darkestGray,
        paddingHorizontal: 5
    },
    rightIconContainer: {
        width: 25,
        height: 25
    },
    inputIcon: {
        color: Colors.darkestGray
    }
})