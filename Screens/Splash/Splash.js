import React, { useEffect } from 'react'
import { View, Image } from 'react-native'

import { Images } from '../../Assets'
import { SCREENS } from '../../Utils'
import styles from './Splash.style'

export default function Splash ({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.push(SCREENS.Auth)
    }, 3000)
  }, [])
  return (
    <View style={styles.splashContainer}>
      <View style={styles.logoContainer}>
        <Image
          source={Images.logo}
          style={styles.logo}
        />
      </View>
    </View>

  )
}
