import React, { useState, useRef } from 'react'
import { View, Text, TouchableOpacity, Animated, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import OrderItem from '../OrderItem'
import styles from './Order.style'
import { strings, icons } from '../../../../Assets'

const onChevronPress = (setIsShowMorePressed) => {
  setIsShowMorePressed(_isShowMorePressed => !_isShowMorePressed)
}

const renderItem = item => <OrderItem
  {...item}
/>

const renderItems = items => <FlatList
  data={items}
  keyExtractor={item => item.id}
  bounces={false}
  showsVerticalScrollIndicator={false}
  renderItem={({item}) => renderItem(item)}
                             />
export default function Order ({
  id,
  date,
  price,
  estimatedDeliveryDate,
  items
}) {
  const [isShowMorePressed, setIsShowMorePressed] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.secionContainer}>
        <Text style={styles.itemKey}>{strings.orderItemIdTitle}: </Text><Text>{id}</Text>
      </View>
      <View style={styles.secionContainer}>
        <Text style={styles.itemKey}>{strings.orderItemDateTitle}: </Text><Text>{date.format('LLL')}</Text>
      </View>
      <View style={styles.secionContainer}>
        <Text style={styles.itemKey}>{strings.orderItemPriceTitle}: </Text><Text>{price}</Text>
      </View>
      <View style={styles.secionContainer}>
        <Text style={styles.itemKey}>{strings.orderItemEstimatedDeliveryDate}: </Text><Text>{estimatedDeliveryDate.format('L')}</Text>
      </View>
      {isShowMorePressed && (
        <View style={styles.itemsContainer}>
          {renderItems(items)}
        </View>
      )}
      <TouchableOpacity
        onPress={() => onChevronPress(setIsShowMorePressed)}
        style={styles.chevronIcon}
      >
        <Icon name={isShowMorePressed ? icons.upChevron : icons.downChevron} style={styles.showMoreIcon} />
      </TouchableOpacity>
    </View>
  )
}
