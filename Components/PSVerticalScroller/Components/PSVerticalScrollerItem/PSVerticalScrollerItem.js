import React from 'react'
import { View, Image, Text } from 'react-native'

import styles from './PSVerticalScrollerItem.style'
import { strings } from '../../../../Assets'
import PSFavButton from '../../../PSFavButton'

export default function PSVerticalScrolleItem ({
  item,
  onItemPress,
  onFavIconPress
}) {
  const {
    image,
    name,
    price
  } = item
  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={styles.image}
      />
      <View style={styles.texContainer}>
        <Text style={styles.nameKey}>{name}</Text>
        <Text style={styles.nameValue}>{price}{strings.currency}</Text>
      </View>
      <PSFavButton containerStyle={styles.favButtonContainer} />
    </View>
  )
}
