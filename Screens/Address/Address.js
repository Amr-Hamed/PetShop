import React, { useState } from 'react'
import { size as _size } from 'lodash'

import { PSScreen, PSInput, PSButton } from '../../Components'
import { Types } from '../../Utils'
import { Text, View } from 'react-native'
import { strings, icons } from '../../Assets'

import styles from './Address.style'

const onInputChange = (inputValue, setInput) => {
  setInput(inputValue)
}

const onSavePress = navigation => navigation.pop()
const onBackButtonPress = navigation => navigation.pop()

export default function Address ({
  navigation
}) {
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [street, setStreet] = useState('')
  const [appartment, setAppartment] = useState('')
  return (
    <PSScreen
      withHeader
      headerProps={{
        type: Types.HEADER_TYPES.SECONDARY,
        onLeftIconPress: () => onBackButtonPress(navigation),
        withLogo: false,
        withRightIcon: false
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{strings.addressTitle}</Text>
        <PSInput
          containerStyle={styles.inputContainer}
          inputStyle={styles.input}
          inputText={name}
          placeholder={strings.addressNameInputPlaceholder}
          leftIconName={icons.addressFirstInputLeft}
          onChange={(input) => onInputChange(input, setName)}
        />
        <PSInput
          containerStyle={styles.inputContainer}
          inputStyle={styles.input}
          inputText={city}
          placeholder={strings.addressCityInputPlaceholder}
          leftIconName={icons.addressSecondInputLeft}
          onChange={(input) => onInputChange(input, setCity)}
        />
        <PSInput
          containerStyle={styles.inputContainer}
          inputStyle={styles.input}
          inputText={street}
          placeholder={strings.addressStreetInputPlaceholder}
          leftIconName={icons.addressThirdInputLeft}
          onChange={(input) => onInputChange(input, setStreet)}
        />
        <PSInput
          containerStyle={styles.inputContainer}
          inputStyle={styles.input}
          inputText={appartment}
          placeholder={strings.addressAppartmentInputPlaceholder}
          leftIconName={icons.addressForthInputLeft}
          onChange={(input) => onInputChange(input, setAppartment)}
        />
        <PSButton
          text={strings.addressButtonText}
          disabled={!_size(name) || !_size(city) || !_size(street) || !_size(appartment)}
          style={styles.button}
          onPress={() => onSavePress(navigation)}
        />
      </View>
    </PSScreen>
  )
}
