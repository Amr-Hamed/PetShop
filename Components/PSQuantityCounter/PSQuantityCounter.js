import React, { useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

import styles from './PSQuantityCounter.style'

const onSubtractPress = (counter, setCounter, setIsSubtractDisabled, setIsAddDisabled) => {
  if (counter === 9) {
    setIsAddDisabled(false)
  }
  setCounter(--counter)
  if (counter === 1) {
    return setIsSubtractDisabled(true)
  }
}

const onAddPress = (counter, setCounter, setIsSubtractDisabled, setIsAddDisabled) => {
  if (counter === 1) {
    setIsSubtractDisabled(false)
  }
  setCounter(++counter)
  if (counter === 9) {
    return setIsAddDisabled(true)
  }
}

export default function PSQuantityCounter ({}) {
  const [counter, setCounter] = useState(1)
  const [isSubtractDisabled, setIsSubtractDisabled] = useState(true)
  const [isAddDisabled, setIsAddDisabled] = useState(false)
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => onSubtractPress(counter, setCounter, setIsSubtractDisabled, setIsAddDisabled)}
        disabled={isSubtractDisabled}
        style={styles.operation(isSubtractDisabled)}
      >
        <Text style={styles.operationText(isSubtractDisabled)}>-</Text>
      </TouchableOpacity>
      <Text>{counter >= 1 && counter <= 9 ? counter : 1}</Text>
      <TouchableOpacity
        onPress={() => onAddPress(counter, setCounter, setIsSubtractDisabled, setIsAddDisabled)}
        disabled={isAddDisabled}
        style={styles.operation(isAddDisabled)}
      >
        <Text style={styles.operationText(isAddDisabled)}>+</Text>
      </TouchableOpacity>
    </View>
  )
}
