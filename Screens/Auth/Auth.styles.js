import { StyleSheet } from 'react-native'
import { Colors } from '../../Assets'
import { isIPhoneDeviceWithNotch } from '../../Utils/Platform'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: isIPhoneDeviceWithNotch() ? 60 : 0
    },
    logo: {
        alignSelf: 'center',
        height: 200,
        width: 200,
        resizeMode: 'contain'
    },
    buttonsContainer: {
        flexDirection: 'row',
        width: '70%',
        justifyContent: 'space-between',
        alignSelf: 'center'
    },
    tab: {
        height: 50,
        width: 100
    },
    tabText: {
        fontSize: 14,
        fontWeight: 'bold'
    }
})
