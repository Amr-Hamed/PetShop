import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'

import styles from './Category.style'

export default function Category ({
    item,
    onItemPress,
    isSelected,
    containerStyle,
    textStyle
}) {
  return (
    <TouchableWithoutFeedback onPress={onItemPress}>
      <View style={[styles.container(isSelected), containerStyle]}>
        <Text style={[styles.itemText(isSelected), textStyle]}>
          {item.key}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  )
}
