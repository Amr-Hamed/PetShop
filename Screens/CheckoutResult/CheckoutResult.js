import React from 'react'
import { View, Image, Text } from 'react-native'

import { PSScreen, PSButton } from '../../Components'
import styles from './CheckoutResult.style'
import { Images, icons, strings } from '../../Assets'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { SCREENS } from '../../Utils'

const onHomeButtonPress = navigation => {
  navigation.push(SCREENS.Home)
}

const onManageOrdersButtonPress = navigation => {
  navigation.push(SCREENS.Orders)
}

export default function CheckoutResult ({
  navigation
}) {
  return (
    <PSScreen>
      <View style={styles.container}>
        <Image
          source={Images.cartoonCat}
          style={styles.logo}
        />
        <View style={styles.iconContainerOne}>
          <View style={styles.iconContainerTwo}>
            <View style={styles.iconContainerThree}>
              <Icon
                name={icons.tick}
                style={styles.icon}
              />
            </View>
          </View>

        </View>
        <Text style={styles.resultTitle}>{strings.resultSuccessTitle}</Text>
        <Text style={styles.resultSubtitle}>{strings.resultSuccessSubitle}</Text>
        <PSButton
            text={strings.checkoutResultFirstButtonText}
            style={styles.button}
            textStyle={styles.buttonText}
            onPress={() => onManageOrdersButtonPress(navigation)}
        />
        <PSButton
            text={strings.checkoutResultSecondButtonText}
            style={[styles.button, styles.secondButton]}
            textStyle={styles.buttonText}
            onPress={() => onHomeButtonPress(navigation)}
        />
      </View>
    </PSScreen>
  )
}
