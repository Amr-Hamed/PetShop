import React from 'react'
import { View, Text, FlatList } from 'react-native'
import moment from 'moment'

import { PSScreen, PSDivider } from '../../Components'

import { Order } from './Components'
import styles from './Orders.style'
import { strings, Images } from '../../Assets'

const renderOrders = (orders) => {
  return <FlatList
    data={orders}
    keyExtractor={order => order.id}
    renderItem={({ item }) => <Order {...item} />}
    bounces={false}
    showsHorizontalScrollIndicator={false}
         />
}
export default function Orders ({
  navigation,
  orders
}) {
  return (
    <PSScreen
      withHeader
      headerProps={{
      }}
    >
      <View style={styles.container}>
        <Text style={styles.subheaderTitle}>{strings.ordersTitle}</Text>
        <PSDivider />
        <View style={styles.ordersContainer}>
          {renderOrders(orders)}
        </View>
      </View>
    </PSScreen>
  )
}

Orders.defaultProps = {
  orders: [{
    id: 1,
    date: moment(),
    items: [
      {
        id: 29,
        image: Images.fish4,
        name: 'Star',
        gender: 'Female',
        breed: 'Colorful Seahorse',
        price: 140,
        age: 2.4,
        color: 'Yellow/Blue',
        height: 2.5,
        description: 'Seahorses are an upright fish. Rather than a head out front and a tail in back, these creatures “stand” in the water column. They have a horse-shaped head, with a long snout and puckered mouth. They swim using the dorsal fin on their backs, and steer using the pectoral fins on either side of their heads.',
        numberOfUnits: 2
      },
      {
        id: 25,
        image: Images.reptile4,
        name: 'Spike',
        gender: 'Female',
        breed: 'American Crocodile',
        price: 350,
        age: 4,
        color: 'Black',
        height: 4.8,
        description: 'The American crocodile has a large lizard-like body with four short legs and a long muscular tail. Their hides are rough and scaled. Juvenile American crocodiles are dark olive brown with darker cross-bands on tail and body, while adults are uniformly brown with darker cross-bands on tail.',
        numberOfUnits: 3
      }],
    price: 100,
    estimatedDeliveryDate: moment().add(7, 'days')
  }, {
    id: 2,
    date: moment().add(-3, 'days'),
    items: [
      {
        id: 29,
        image: Images.fish4,
        name: 'Star',
        gender: 'Female',
        breed: 'Colorful Seahorse',
        price: 140,
        age: 2.4,
        color: 'Yellow/Blue',
        height: 2.5,
        description: 'Seahorses are an upright fish. Rather than a head out front and a tail in back, these creatures “stand” in the water column. They have a horse-shaped head, with a long snout and puckered mouth. They swim using the dorsal fin on their backs, and steer using the pectoral fins on either side of their heads.',
        numberOfUnits: 2
      },
      {
        id: 25,
        image: Images.reptile4,
        name: 'Spike',
        gender: 'Female',
        breed: 'American Crocodile',
        price: 350,
        age: 4,
        color: 'Black',
        height: 4.8,
        description: 'The American crocodile has a large lizard-like body with four short legs and a long muscular tail. Their hides are rough and scaled. Juvenile American crocodiles are dark olive brown with darker cross-bands on tail and body, while adults are uniformly brown with darker cross-bands on tail.',
        numberOfUnits: 3
      }],
    price: 100,
    estimatedDeliveryDate: moment().add(4, 'days')
  }, {
    id: 3,
    date: moment().add(-5, 'days'),
    items: [
      {
        id: 29,
        image: Images.fish4,
        name: 'Star',
        gender: 'Female',
        breed: 'Colorful Seahorse',
        price: 140,
        age: 2.4,
        color: 'Yellow/Blue',
        height: 2.5,
        description: 'Seahorses are an upright fish. Rather than a head out front and a tail in back, these creatures “stand” in the water column. They have a horse-shaped head, with a long snout and puckered mouth. They swim using the dorsal fin on their backs, and steer using the pectoral fins on either side of their heads.',
        numberOfUnits: 2
      },
      {
        id: 25,
        image: Images.reptile4,
        name: 'Spike',
        gender: 'Female',
        breed: 'American Crocodile',
        price: 350,
        age: 4,
        color: 'Black',
        height: 4.8,
        description: 'The American crocodile has a large lizard-like body with four short legs and a long muscular tail. Their hides are rough and scaled. Juvenile American crocodiles are dark olive brown with darker cross-bands on tail and body, while adults are uniformly brown with darker cross-bands on tail.',
        numberOfUnits: 3
      }],
    price: 100,
    estimatedDeliveryDate: moment().add(2, 'days')
  }]
}
