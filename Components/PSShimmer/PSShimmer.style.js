import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  shimmerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden'
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  shapesContainer: direction => ({
    flexDirection: direction
  })
})
