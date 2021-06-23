import { StyleSheet } from 'react-native'
import { Colors } from '../../Assets'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 70
  },
  operation: disabled => ({
    borderWidth: 1,
    height: 20,
    width: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: disabled ? Colors.darkGray : Colors.mainYellow
  }),
  operationText: isOperationDisabled => ({
    color: isOperationDisabled ? Colors.darkGray : Colors.mainYellow
  })
})
