import React from 'react'
import { View } from 'react-native'

import styles from './PSDivider.style'
import { Types } from '../../Utils'

export default function PSDivider({ 
    type,
    style 
}) {
    return (
        <View 
            style={[styles.container(type), style]}
        />
    )
}

PSDivider.defaultProps = {
    type: Types.DIVIDER_TYPES.HORIZONTAL
}
