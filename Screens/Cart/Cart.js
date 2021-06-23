import React from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { isArray as _isArray, get as _get, size as _size } from 'lodash'

import { PSScreen, PSCartItem, PSDivider, PSButton, PSInfoItem } from '../../Components'
import { icons, Colors, strings, Images } from '../../Assets'
import styles from './Cart.styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Types, SCREENS } from '../../Utils'

const onBackButtonPress = navigation => navigation.pop()

const onCloseIconPress = navigation => navigation.push(SCREENS.Home)

const onCheckoutButtonPress = navigation => navigation.push(SCREENS.Checkout)

const renderCartItems = items => {
  return _size(items) ? (
    <FlatList
      bounces={false}
      data={items}
      renderItem={({ item }) => <PSCartItem data={item} />}
      showsVerticalScrollIndicator={false}
      // keyExtractor={item => item.id}
    />
  ) : (
    <>
      <Image
        source={Images.noItems}
        style={styles.noItemsImage}
      />
      <Text style={styles.noItemsText}>No Items to show</Text>
    </>
  )
}

export default function Cart ({
  navigation,
  totalCartItemsPrice
//   items
}) {
  const { items } = _get(navigation, 'state.params', {})
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
        <View style={styles.itemsNumberContainer}>
          <Text style={styles.itemsNumber}>{_isArray(items) && _size(items) ? items.length : 0} {strings.cartItemsTitle}</Text>
          <TouchableOpacity style={styles.deleteItemsContainer}>
            <Icon
              name={icons.deleteBin}
              size={20}
              color={Colors.mainYellow}
            />
            <Text style={styles.deleteItemsTitle}>{strings.cartDeleteItemsTitle}</Text>
          </TouchableOpacity>
        </View>
        <PSDivider style={styles.sectionsDivider(5)} />
        <View style={styles.itemsContainer}>
          {renderCartItems(items)}
        </View>
        <PSDivider style={styles.sectionsDivider(20)} />
        <Text style={styles.summaryTitle}>{strings.summaryTitle}</Text>
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
          text={strings.cartButtonText}
          style={styles.cartButton}
          onPress={() => onCheckoutButtonPress(navigation)}
        />
      </View>
    </PSScreen>
  )
}

Cart.defaultProps = {
  items: [],
  totalCartItemsPrice: 1000
}
