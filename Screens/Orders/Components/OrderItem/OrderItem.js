import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './OrderItem.style'
import { strings } from '../../../../Assets'

export default function OrderItem ({
  image,
  name,
  breed,
  price,
  numberOfUnits
}
) {
  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={styles.image}
      />
      <View style={styles.content}>
        {/* <View style={styles.contentRow}> */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionKey}>{strings.orderItemNameTitle}: </Text>
            <Text style={styles.sectionValue}>{name}</Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionKey}>{strings.orderItemUnitPriceTitle}: </Text>
            <Text style={styles.sectionValue}>{price}{strings.currency}</Text>
          </View>
        {/* </View> */}
        {/* <View style={styles.contentRow}> */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionKey}>{strings.orderItemBreedTitle}: </Text>
            <Text style={styles.sectionValue}>{breed}</Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionKey}>{strings.orderItemNumberTitle}: </Text>
            <Text style={styles.sectionValue}>{numberOfUnits}</Text>
          </View>
        {/* </View> */}
        <View style={styles.contentRow}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionKey}>{strings.orderItemTotalPriceTitle}: </Text>
            <Text style={styles.sectionValue}>{price * numberOfUnits}{strings.currency}</Text>
          </View>
        </View>

      </View>
    </View>
  )
}
