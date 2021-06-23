import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import Modal from 'react-native-modal'

import styles from './PSLoadingOverlay.style'

export default function PSLoadingOverlay ({
  containerStyle,
  children
}) {
  return (
    <Modal
      isVisible
      animationIn='slideInUp'
      backdropTransitionInTiming={650}
      backdropTransitionOutTiming={0}
    >
      <View
        style={[styles.container, containerStyle]}
      >
        <ActivityIndicator size='large' />
      </View>
    </Modal>
  )
}
