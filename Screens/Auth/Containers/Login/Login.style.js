import { StyleSheet } from 'react-native'
import { Colors } from '../../../../Assets'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50
    },
    logo: {
        alignSelf: 'center',
        height: 200,
        width: 200,
        resizeMode: 'contain'
    },
    passwordContainer: {
        marginTop: 10
    },
    loginButton: {
        width: '70%',
        marginTop: 50,
        height: 50
    },
    loginButtonText: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})