import { StyleSheet } from 'react-native'
import { Colors } from '../../Assets'
import { Types } from '../../Utils'

export default StyleSheet.create({
    container: type => ({
        borderWidth: 0.5,
        borderColor: Colors.darkGray,
        width: type === Types.DIVIDER_TYPES.HORIZONTAL ? '100%' : 0.5
    })
})