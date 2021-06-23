import React from 'react'
import { View, StatusBar, ScrollView, FlatList } from 'react-native'

import { PSHeader } from '../index'
import { Colors } from '../../Assets'

import styles from './PSScreen.style'

export default function PSScreen ({
  withHeader,
  headerProps,
  children,
  withStatusBar,
  containerStyle
}) {
  return (
    <View style={[styles.container, containerStyle]}>
      {withStatusBar && (
        <StatusBar
          translucent={false}
          barStyle='dark-content'
          backgroundColor={Colors.lightGray}
        />
      )}
      {withHeader && <PSHeader {...headerProps} />}
      <FlatList
        bounces={false}
        data={[children]}
        renderItem={({ item }) => item}
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        keyExtractor={() => 1}
      />
    </View>
  )
}

PSScreen.defaultProps = {
  withStatusBar: true
}
