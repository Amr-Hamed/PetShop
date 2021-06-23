import React from 'react'
import { View, Text } from 'react-native'

import styles from './PSInfoItem.style'
import { strings } from '../../Assets'

export default function PSInfoItem ({
  title,
  subtitle,
  textFontSize,
  titleStyle,
  subtitleStyle
}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title(textFontSize), titleStyle]}>{title}</Text>
      <Text style={[styles.subtitle(textFontSize), subtitleStyle]}>{subtitle}</Text>
    </View>
  )
}
