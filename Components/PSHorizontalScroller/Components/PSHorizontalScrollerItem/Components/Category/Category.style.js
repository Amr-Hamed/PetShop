import { StyleSheet } from 'react-native'
import { Colors } from '../../../../../../Assets'

export default StyleSheet.create({
    container: isSelected => ({
        width: 75,
        height: 40,
        borderRadius: 30,
        marginRight: 15,
        backgroundColor: isSelected ? Colors.mainYellow : Colors.transparent,
        borderWidth: isSelected ? 0 : 1,
        borderColor: Colors.mainYellow,
        justifyContent: 'center',
        alignItems: 'center'
    }),
    itemText: isSelected => ({
        color: isSelected ? Colors.lightGray : Colors.mainYellow,
        fontSize: 14,
        fontWeight: 'bold'
    })
})