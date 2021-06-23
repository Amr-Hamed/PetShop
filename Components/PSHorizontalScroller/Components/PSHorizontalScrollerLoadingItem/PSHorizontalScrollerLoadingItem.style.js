import { StyleSheet } from 'react-native'
import { Types } from '../../../../Utils'
import { Colors } from '../../../../Assets'

export default StyleSheet.create({
    container: type => ({
        width: type === Types.HORIZONTAL_SCROLLER_TYPES.CATEGORIES ? 75 : 170,
        height: type === Types.HORIZONTAL_SCROLLER_TYPES.CATEGORIES ? 40 : 230,
        borderRadius: 20,
        marginRight: 15,
        overflow: 'hidden',
        borderWidth: type === Types.HORIZONTAL_SCROLLER_TYPES.PETS && 1,
        borderColor: Colors.darkGray,
        position: 'relative'
    }),
    favIconContainer: {
        position: 'absolute',
        bottom: -10,
        right: 25
    }
})