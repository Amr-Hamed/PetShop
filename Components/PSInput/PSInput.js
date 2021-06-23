import React, { useState } from 'react'
import { View, TextInput, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Colors, icons } from '../../Assets'
import { Types } from '../../Utils'

import styles from './PSInput.style'

export default function PSInput ({
    type,
    inputText,
    onChange,
    containerStyle,
    inputStyle,
    withLeftIcon,
    leftIconName,
    withRightIcon,
    rightIconName,
    placeholder,
    leftIconSize,
    rightIconSize,
    leftIconStyle,
    rightIconStyle
}) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    return (
        <View style={[styles.container, containerStyle]}>
            {withLeftIcon && (
                <Icon
                    name={leftIconName} 
                    size={leftIconSize}
                    style={[styles.inputIcon, leftIconStyle]}
                />
            )}
            <TextInput
                secureTextEntry={type === Types.INPUT_TYPES.PASSWORD && !isPasswordVisible}
                value={inputText} 
                onChangeText={onChange} 
                placeholder={placeholder}
                placeholderTextColor={Colors.darkestGray}
                style={[styles.input, inputStyle]}
                maxLength={20}
            />
            <View 
                style={[styles.rightIconContainer, rightIconStyle]}
            >
                {withRightIcon && (
                    <TouchableWithoutFeedback onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                        <Icon
                            name={rightIconName || isPasswordVisible ? icons.passwordInputVisible : icons.passwordInputNotVisible }
                            size={rightIconSize}
                            style={[styles.inputIcon, rightIconStyle]}
                        />
                    </TouchableWithoutFeedback>
                )}

            </View>
        </View>
    )
}

PSInput.defaultProps = {
    type: Types.INPUT_TYPES.TEXT,
    withLeftIcon: true,
    withRightIcon: false,
    leftIconSize: 20,
    rightIconSize: 20
}
