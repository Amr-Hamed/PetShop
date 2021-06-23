import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { Star } from './Components'

import styles from './PSRating.style'

export default function PSRating ({
  ratingCount = 5,
  rate
}) {
  const [stars, setStars] = useState([<Star
    isSelected
  />])

  useEffect(() => {
    const _stars = []
    for (let i = 0; i < ratingCount; i++) {
      _stars.push(<Star
        isSelected={i < rate}
                  />)
    }
    setStars(_stars)
  }, [])
  return (
    <View style={[styles.container]}>
      {stars}
    </View>
  )
}
