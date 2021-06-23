import { StyleSheet } from 'react-native'
import { Colors, TextColors } from '../../Assets'
import { Types } from '../../Utils'

export default StyleSheet.create({
  button: (type, disabled) => ({
    backgroundColor: disabled ? Colors.darkGray : (type === Types.BUTTON_TYPES.PRIMARY ? Colors.mainYellow : Colors.transparent),
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: type === Types.BUTTON_TYPES.SECONDARY && Colors.mainYellow,
    borderWidth: type === Types.BUTTON_TYPES.SECONDARY ? 1 : 0,
    elevation: 2,
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    borderRadius: 6,
    flexDirection: 'row'
  }),
  textStyle: (type, disabled) => ({
    color: disabled ? Colors.darkestGray : (type === Types.BUTTON_TYPES.PRIMARY ? TextColors.buttonTextColorOne : TextColors.buttonTextColorTwo),
    fontSize: 16,
    fontWeight: 'bold'
  })
})
