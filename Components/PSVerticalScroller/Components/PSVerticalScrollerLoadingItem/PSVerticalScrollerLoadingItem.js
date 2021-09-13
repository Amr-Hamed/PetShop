import React from 'react'
import { View } from 'react-native'

import styles from './PSVerticalScrollerLoadingItem.style'
import PSShimmer from '../../../PSShimmer'
import {
  loadingConfig,
  shimmerPlaceholderConfig
} from './PSVerticalScrollerLoadingItem.Config'

export default function PSHorizontalScrollerLoadingItem ({
  style
}) {
  return (
    <View style={[styles.container, style]}>
      <PSShimmer
        config={loadingConfig()}
        shimmerPlaceholderConfig={shimmerPlaceholderConfig}
      />
    </View>
  )
}
