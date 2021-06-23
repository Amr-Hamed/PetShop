import React from 'react'
import { View, TouchableWithoutFeedback, Text } from 'react-native'

import { Types } from '../../Utils'

import styles from './PSButton.style'

export default function PSButton ({
    onPress,
    type,
    text,
    disabled,
    style,
    textStyle
}) {
    return (
        <TouchableWithoutFeedback onPress={onPress} disabled={disabled} >
            <View style={[styles.button(type, disabled), style]}>
                <Text style={[styles.textStyle(type, disabled), textStyle]}>{text}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

PSButton.defaultProps = {
    onPress: () => {},
    type: Types.BUTTON_TYPES.PRIMARY,
    disabled: false
}
