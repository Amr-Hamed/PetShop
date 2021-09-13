import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { isFunction as _isFunction } from 'lodash'

import { PSVerticalScrollerItem, PSVerticalScrollerLoadingItem } from './Components'
import styles from './PSVerticalScroller.style'

const renderItem = (_item, isLoading, data, onItemPress, onFavIconPress) => {
  const { index, item } = _item
  return isLoading ? <PSVerticalScrollerLoadingItem />
    : <PSVerticalScrollerItem
      item={item}
      onItemPress={() => _onItemPress(index, data, onItemPress)}
      onFavIconPress={() => {}}
    />
}

const _onItemPress = (index, data, onItemPress) => {
  _isFunction(onItemPress) && onItemPress(data[index])
}

export default function PSVerticalScroller ({
  isLoading,
  data,
  onItemPress,
  onFavIconPress,
  numOfColumns,
  style
}) {
  return (
    <FlatList
      data={isLoading ? new Array({ key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }) : data}
      renderItem={item => renderItem(item, isLoading, data, onItemPress, onFavIconPress)}
      bounces={false}
      showsVerticalScrollIndicator={false}
      style={[styles.container, style]}
      scrollEnabled={!isLoading}
      keyExtractor={item => item.id}
      numColumns={numOfColumns}
    />
  )
}
