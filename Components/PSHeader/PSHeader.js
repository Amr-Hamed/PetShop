import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { isFunction as _isFunction } from 'lodash'

import { icons, Images, Colors } from '../../Assets'
import styles from './PSHeader.js.style'
import { Types } from '../../Utils'
import PSLinearGradientBackground from '../PSLinearGradientBackground'

export default function PSHeader ({
  type,
  withImageBackground,
  withIconsLinearGradient,
  withLeftIcon,
  leftIconName,
  onLeftIconPress,
  renderLeftIcon,
  withLogo,
  withRightIcon,
  rightIconName,
  onRightIconPress,
  renderRightIcon,
  containerStyle,
  leftIconSize,
  rightIconSize
}) {
  const _leftIconName = leftIconName || (type === Types.HEADER_TYPES.PRIMARY ? icons.drawer : icons.backButton)
  const _rightIconName = rightIconName || (type === Types.HEADER_TYPES.PRIMARY ? icons.cart : icons.closeButton)
  return (
    <View style={[styles.container(withLogo, withImageBackground), containerStyle]}>
      {withLeftIcon && (
        <TouchableOpacity onPress={onLeftIconPress}>
          <>{_isFunction(renderLeftIcon) ? renderLeftIcon() : (
            <>
              {withIconsLinearGradient ? (
                <PSLinearGradientBackground>
                  <Icon
                    name={_leftIconName}
                    size={leftIconSize}
                    color={Colors.white}
                    style={styles.leftIcon}
                  />
                </PSLinearGradientBackground>
              ) : (
                <Icon
                  name={_leftIconName}
                  size={leftIconSize}
                  style={styles.leftIcon}
                />
              )}
            </>
          )}
          </>
        </TouchableOpacity>
      )}
      {withLogo &&
        <Image
          source={Images.logo}
          style={styles.logo}
        />}
      {withRightIcon && (
        <TouchableOpacity onPress={onRightIconPress}>
          <>{_isFunction(renderRightIcon) ? renderRightIcon() : (
            <>
              {withIconsLinearGradient ? (
              <PSLinearGradientBackground>
                <Icon
                  name={_rightIconName}
                  size={rightIconSize}
                  color={Colors.white}
                  style={styles.leftIcon}
                />
              </PSLinearGradientBackground>
            ) : (
              <Icon
                name={_rightIconName}
                size={leftIconSize}
                style={styles.leftIcon}
              />
            )}
            </>
          )}
          </>
        </TouchableOpacity>
      )}
    </View>
  )
}

PSHeader.defaultProps = {
  type: Types.HEADER_TYPES.PRIMARY,
  withImageBackground: false,
  withLeftIcon: true,
  leftIconSize: 25,
  withLogo: true,
  withRightIcon: true,
  rightIconSize: 25
}
