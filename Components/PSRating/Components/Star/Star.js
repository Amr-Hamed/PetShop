import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { icons, Colors } from '../../../../Assets'

export default function Star ({
  isSelected,
  size = 15
}) {
  return (
    <Icon
      name={isSelected ? icons.ratingSelected : icons.ratingUnSelected}
      size={size}
      color={Colors.mainYellow}
    />
  )
}
