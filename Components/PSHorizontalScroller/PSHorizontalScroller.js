import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { isFunction as _isFunction } from 'lodash'

import { PSHorizontalScrollerItem, PSHorizontalScrollerLoadingItem } from './Components'
import styles from './PSHorizontalScroller.style'

const renderItem = (type, _item, isLoading, selectedItemIndex, setSelectedItemIndex, data, onItemPress, onFavIconPress) => {
  const { index, item } = _item
  return isLoading ? <PSHorizontalScrollerLoadingItem type={type} />
    : <PSHorizontalScrollerItem
      type={type}
      item={item}
      onItemPress={() => _onItemPress(setSelectedItemIndex, index, data, onItemPress)}
      onFavIconPress={() => {}}
      isSelected={index === selectedItemIndex}
    />
}

const _onItemPress = (setSelectedItemIndex, index, data, onItemPress) => {
  setSelectedItemIndex(index)
  _isFunction(onItemPress) && onItemPress(data[index])
}

export default function PSHorizontalScroller ({
  type,
  isLoading,
  data,
  onItemPress,
  onFavIconPress,
  style
}) {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0)
  return (
    <FlatList
      data={isLoading ? new Array({ key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }) : data}
      renderItem={item => renderItem(type, item, isLoading, selectedItemIndex, setSelectedItemIndex, data, onItemPress, onFavIconPress)}
      horizontal
      bounces={false}
      showsHorizontalScrollIndicator={false}
      style={[styles.container, style]}
      scrollEnabled={!isLoading}
      keyExtractor={item => item.id}
    />
  )
}
