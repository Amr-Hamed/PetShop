import React from 'react'
import { View, Image, Text } from 'react-native'

import { get as _get } from 'lodash'

import { PSScreen, PSFavButton, PSDivider, PSButton } from '../../Components'
import { strings, Images } from '../../Assets'
import styles from './ItemDetails.style'
import { Types, SCREENS } from '../../Utils'

const onBackButtonPress = navigation => navigation.pop()

const onCloseIconPress = navigation => navigation.pop()

const onMainSectionButtonPress = navigation => navigation.push(SCREENS.Cart, {
  items: [{
    id: 10,
    image: Images.dog1,
    name: 'Lola',
    gender: 'Female',
    breed: 'Golden Retriever',
    price: 40,
    age: 3,
    color: 'Golden',
    height: 0.8,
    description: 'The Golden Retriever is one of the most popular dog breeds in the United States. The breed\'s friendly, tolerant attitude makes them great family pets, and their intelligence makes them highly capable working dogs.'
  }, {
    id: 12,
    image: Images.cat2,
    name: 'Cookie',
    gender: 'Female',
    breed: 'Egyptian Mau',
    price: 15,
    age: 0.7,
    color: 'White/green',
    height: 0.4
  }]
})

export default function ItemDetails ({
  navigation
}) {
  const pet = _get(navigation, 'state.params', {})
  const {
    image,
    name,
    gender,
    breed,
    price,
    age,
    color,
    height,
    description
  } = pet

  return (
    <PSScreen
      withHeader
      headerProps={{
        type: Types.HEADER_TYPES.SECONDARY,
        withIconsLinearGradient: true,
        withLogo: false,
        onLeftIconPress: () => onBackButtonPress(navigation),
        onRightIconPress: () => onCloseIconPress(navigation),
        containerStyle: styles.headerContainerStyle
      }}
    >
      <View style={styles.imageContainer}>
        <Image
          source={image}
          style={styles.image}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.mainCard}>
          <PSFavButton containerStyle={styles.favIconContainer} />
          <View style={styles.mainCardTitleAndSubtitleContainer}>
            <Text style={styles.mainCardTitle}>{name}</Text>
            <Text style={styles.mainCardSubtitle}>{gender}, {breed}</Text>
          </View>
          <Text style={styles.mainCardPrice}>{price}{strings.currency}</Text>
        </View>
        <View style={styles.detailsCard}>
          <View style={styles.detailsCardMainSection}>
            <View style={styles.detailsCardMainSubsection}>
              <Text>{strings.itemDetailsContentAgeTitle}</Text>
              <Text>{age}</Text>
            </View>
            <PSDivider type={Types.DIVIDER_TYPES.VERTICAL} style={styles.detailsCardDivider} />
            <View style={styles.detailsCardMainSubsection}>
              <Text>{strings.itemDetailsContentGenderTitle}</Text>
              <Text>{gender}</Text>
            </View>
            <PSDivider type={Types.DIVIDER_TYPES.VERTICAL} style={styles.detailsCardDivider} />
            <View style={styles.detailsCardMainSubsection}>
              <Text>{strings.itemDetailsContentColorTitle}</Text>
              <Text>{color}</Text>
            </View>
            <PSDivider type={Types.DIVIDER_TYPES.VERTICAL} style={styles.detailsCardDivider} />
            <View style={styles.detailsCardMainSubsection}>
              <Text>{strings.itemDetailsContentHeightTitle}</Text>
              <Text>{height}{strings.lengthUnit}</Text>
            </View>
          </View>
          <PSDivider style={styles.detailsMainCardDivider} />
          <Text style={styles.detailsCardDescriptionTitle}>{strings.itemDetailsDescriptionTitle}</Text>
          <Text style={styles.detailsCardDescription}>{description}</Text>
          <PSButton
            text={strings.itemDetailsButtonText}
            style={styles.itemDetailsButtonStyle}
            textStyle={styles.itemDetailsButtonTextStyle}
            onPress={() => onMainSectionButtonPress(navigation)}
          />
        </View>
      </View>
    </PSScreen>
  )
}
