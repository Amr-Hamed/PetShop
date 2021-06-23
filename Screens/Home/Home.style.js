import { StyleSheet } from 'react-native'
import { Colors } from '../../Assets'

export default StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 10
    },
    subTitle: {
        fontSize: 14,
        color: Colors.darkestGray,
        marginTop: 10,
        marginLeft: 10
    },
    divider: {
        marginVertical: 20,
        marginHorizontal: 10
    },
    homeCategoriesTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10
    },
    categoriesScroller: {
        marginTop: 15
    }
})