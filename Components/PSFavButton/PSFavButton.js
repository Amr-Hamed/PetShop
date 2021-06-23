import React, { useState } from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { isFunction as _isFunction } from 'lodash'

import { icons, Colors } from '../../Assets'
import styles from './PSFavButton.style'

const _onPress = (onPress, setisSelected) => {
  setisSelected(isSelected => !isSelected)
  _isFunction(onPress) && onPress()
}

export default function PSFavButton ({
  onPress,
  iconSize = 25,
  containerStyle
}) {
  const [isSelected, setisSelected] = useState(false)

  return (
    <TouchableWithoutFeedback onPress={() => _onPress(onPress, setisSelected)}>
      <View style={[styles.favIconContainer, containerStyle]}>
        <Icon
          name={isSelected ? icons.favSelected : icons.favUnselected}
          size={iconSize}
          color={Colors.favRed}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}
