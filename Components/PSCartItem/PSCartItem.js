import React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './PSCartItem.style'
import { icons, Colors, strings } from '../../Assets'
import { PSQuantityCounter } from '../../Components'

export default function PSCartItem ({
  data,
  onDeleteIconPress
}) {
  const {
    image,
    name,
    gender,
    breed,
    price
  } = data
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={image}
          style={styles.image}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.contentTitleAndDeleteContainer}>
          <View>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>{gender}, {breed}</Text>
          </View>
          <TouchableOpacity onPress={onDeleteIconPress} style={styles.deleteIcon}>
            <Icon name={icons.deleteBin} size={20} style={styles.deleteIcon} color={Colors.mainYellow} />
          </TouchableOpacity>
        </View>
        <View style={styles.counterAndPriceContainer}>
          <PSQuantityCounter />
          <Text style={styles.price}>{price}{strings.currency}</Text>
        </View>
      </View>
    </View>
  )
}
