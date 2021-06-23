import React from 'react'
import { View, TouchableWithoutFeedback, Image, Text } from 'react-native'
import { isFunction as _isFunction } from 'lodash'

import { PSLinearGradientBackground, PSFavButton } from '../../../../../index'
import styles from './Pet.style'

const _onFavIconPress = (onFavIconPress, item) => {
  _isFunction(onFavIconPress) && onFavIconPress(item)
}

export default function Pet ({
  item,
  onItemPress,
  onFavIconPress
}) {
  const { name, gender, image, breed } = item
  return (
    <TouchableWithoutFeedback onPress={onItemPress}>
        <View style={styles.container}>
          <Image
            source={image}
            style={styles.image}
          />
          <PSLinearGradientBackground style={styles.titleContainer}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>{gender}, {breed}</Text>
          </PSLinearGradientBackground>
          <PSFavButton onPress={() => _onFavIconPress(onFavIconPress, item)} containerStyle={styles.favButtonContainerStyle} />
        </View>
    </TouchableWithoutFeedback>
  )
}
