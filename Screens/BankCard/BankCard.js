import React, { useState } from 'react'
import { size as _size } from 'lodash'

import { PSScreen, PSInput, PSButton } from '../../Components'
import { Types } from '../../Utils'
import { Text, View, Image } from 'react-native'
import { strings, icons, Images } from '../../Assets'

import styles from './BankCard.style'

const onInputChange = (inputValue, setInput) => {
  setInput(inputValue)
}

const onSavePress = navigation => navigation.pop()
const onBackButtonPress = navigation => navigation.pop()

export default function BankCard ({
  navigation
}) {
  const [number, setNumber] = useState('')
  const [expDate, setExpDate] = useState('')
  const [cvv, setCvv] = useState('')
  const [name, setName] = useState('')
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
        <Text style={styles.title}>{strings.bankCardTitle}</Text>
        <View style={styles.cardImageContainer}>
          <Image
            source={Images.bankCard}
            style={styles.cardImage}
          />
        </View>
        <PSInput
          containerStyle={styles.inputContainer}
          inputText={number}
          placeholder={strings.bankCardFirstInputPlaceholder}
          leftIconName={icons.bankCardFirstInputLeft}
          onChange={(input) => onInputChange(input, setNumber)}
        />
        <View style={styles.dateAndCvvInputsContainer}>
          <PSInput
              containerStyle={[styles.inputContainer, styles.dateInput]}
              inputText={expDate}
              placeholder={strings.bankCardSecondInputPlaceholder}
              leftIconName={icons.bankCardSecondInputLeft}
              onChange={(input) => onInputChange(input, setExpDate)}
          />
          <PSInput
              containerStyle={[styles.inputContainer, styles.cvvInput]}
              inputText={cvv}
              placeholder={strings.bankCardThirdInputPlaceholder}
              leftIconName={icons.bankCardThirdInputLeft}
              onChange={(input) => onInputChange(input, setCvv)}
          />
        </View>
        <PSInput
          containerStyle={styles.inputContainer}
          inputText={name}
          placeholder={strings.bankCardForthInputPlaceholder}
          leftIconName={icons.bankCardForthInputLeft}
          onChange={(input) => onInputChange(input, setName)}
        />
        <PSButton
          text={strings.bankCardButtonText}
          disabled={!_size(number) || !_size(expDate) || !_size(cvv) || !_size(name)}
          style={styles.button}
          onPress={() => onSavePress(navigation)}
        />
      </View>
    </PSScreen>
  )
}
