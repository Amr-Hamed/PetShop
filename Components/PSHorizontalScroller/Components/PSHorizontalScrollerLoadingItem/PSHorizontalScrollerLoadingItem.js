import React from 'react'
import { View } from 'react-native'

import styles from './PSHorizontalScrollerLoadingItem.style'
import PSShimmer from '../../../PSShimmer'
import {
    loadingConfig,
    shimmerPlaceholderConfig
  } from './PSHorizontalScrollerLoadingItem.Config'

export default function PSHorizontalScrollerLoadingItem({
    type,
    style,
}) {
    return (
        <View style={[styles.container(type), style]}>
            <PSShimmer
                config={loadingConfig(type)}
                shimmerPlaceholderConfig={shimmerPlaceholderConfig}
            />
        </View>
    )
}
