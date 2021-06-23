import { StyleSheet } from 'react-native'
import { isIPhoneDeviceWithNotch } from '../../Utils/Platform'

export default StyleSheet.create({
    container: (withLogo, withImageBackground) => ({
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: isIPhoneDeviceWithNotch ? (withLogo ? 10 : 45) : 8,
        width: '95%',
        alignSelf: 'center',
        position: withImageBackground ? 'absolute' : 'relative',
        zIndex: withImageBackground ? 2 : 0
    }),
    logo: {
        height: 110,
        width: 110,
        resizeMode: 'contain'
    }
})