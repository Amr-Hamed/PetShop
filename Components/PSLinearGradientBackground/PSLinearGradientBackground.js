import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

import styles from './PSLinearGradientBackground.style'
import { Colors } from '../../Assets'

export default function PSTextWithFadedBackground ({
  children,
  style
}) {
  return (
    <LinearGradient
      colors={[Colors.transparent, Colors.lightBlack, Colors.transparent]}
      style={[styles.container, style]}
    >
      {children}
    </LinearGradient>
  )
}
