import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { size as _size } from 'lodash'

import { PSScreen, PSDivider, PSInfoItem, PSButton, PSLoadingOverlay } from '../../Components'
import { Types, SCREENS } from '../../Utils'
import { strings, icons } from '../../Assets'
import styles from './Checkout.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const onBackButtonPress = navigation => navigation.pop()

const onCloseIconPress = navigation => navigation.push(SCREENS.Home)

const onEditItemIconPress = (navigation, screen) => navigation.push(screen)

const onCheckoutButtonPress = (setIsLoading, navigation) => {
  setIsLoading(true)
  setTimeout(() => {
    setIsLoading(false)
    navigation.push(SCREENS.CheckoutResult)
  }, 3000)
}

export default function Checkout ({
  navigation,
  totalCartItemsPrice,
  account
}) {
  const {
    name,
    address = {},
    cardNumber
  } = account
  const {
    city,
    street,
    appartment
  } = address

  const [isLoading, setIsLoading] = useState(false)
  return (
    <PSScreen
      withHeader
      headerProps={{
        type: Types.HEADER_TYPES.SECONDARY,
        withLogo: false,
        onLeftIconPress: () => onBackButtonPress(navigation),
        onRightIconPress: () => onCloseIconPress(navigation)
      }}
    >
      <View style={styles.content}>
        <Text style={styles.title}>{strings.checkoutTitle}</Text>
        <View style={styles.itemContainer}>
          <View style={styles.itemTitleAndIconContainer}>
            <Text style={styles.itemTitle}>{strings.checkoutAddressItemTitle}</Text>
            <TouchableOpacity onPress={() => onEditItemIconPress(navigation, 'Address')}>
              <Icon name={icons.pencil} size={20} style={styles.itemIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.subtitleContainer}>
            <Text style={styles.itemSubtitle}>{_size(name) ? name : strings.checkoutShippingItemNamePlaceholder}</Text>
            <Text style={styles.itemSubtitle}>{_size(city) ? street : strings.checkoutShippingItemCityPlaceholder}</Text>
            <Text style={styles.itemSubtitle}>{_size(street) ? street : strings.checkoutShippingItemStreetPlaceholder}</Text>
            <Text style={styles.itemSubtitle}>{_size(appartment) ? appartment : strings.checkoutShippingItemAppartmentPlaceholder}</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTitleAndIconContainer}>
            <Text style={styles.itemTitle}>{strings.checkoutPaymentItemTitle}</Text>
            <TouchableOpacity onPress={() => onEditItemIconPress(navigation, 'BankCard')}>
              <Icon name={icons.pencil} size={20} style={styles.itemIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.subtitleContainer}>
            <Text style={styles.itemSubtitle}>{_size(cardNumber) ? cardNumber : strings.checkoutPaymentItemCardPlaceholder}</Text>
          </View>
        </View>
        <PSDivider style={styles.sectionsDivider(15)} />
        <PSInfoItem
          title={strings.summaryPriceTitle}
          subtitle={`${totalCartItemsPrice}${strings.currency}`}
          textFontSize={14}
        />
        <PSInfoItem
          title={strings.summaryShippingTitle}
          subtitle={strings.summaryShippingSubtitle}
          textFontSize={14}
        />
        <PSDivider style={styles.sectionsDivider(15)} />
        <PSInfoItem
          title={strings.totalPriceTitle}
          subtitle={`${totalCartItemsPrice}${strings.currency}`}
          textFontSize={20}
        />
        <PSButton
          text={strings.checkoutButtonText}
          style={styles.checkoutButton}
          onPress={() => onCheckoutButtonPress(setIsLoading, navigation)}
          // disabled={!_size(name) || !_size(street) || !_size(city) || !_size(cardNumber)}
        />
      </View>
      {isLoading &&
        <PSLoadingOverlay />}
    </PSScreen>
  )
}

Checkout.defaultProps = {
  totalCartItemsPrice: 1000,
  account: {}
}
