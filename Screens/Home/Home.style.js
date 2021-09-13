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
        width: '95%',
        alignSelf: 'center'
    },
    homeCategoriesTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10
    },
    categoriesScroller: {
        marginTop: 15
    },
    petsScroller: {
        marginBottom: 10
    },
    accTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10
    }
})